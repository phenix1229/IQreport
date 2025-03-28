import { Controller, Get, Post, Body, Param, Res, HttpStatus, NotFoundException, Put, UnauthorizedException, Req } from '@nestjs/common';
import { PsychologistsService } from './psychologists.service';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import * as express from 'express';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Controller('psychologists')
export class PsychologistsController {
  constructor(private readonly psychologistsService: PsychologistsService, private jwtService:JwtService, private configService: ConfigService) {}

  @Post()
  async create(@Res() res:express.Response, @Body() createPsychologistDto: CreatePsychologistDto) {
    const newPsychologist = this.psychologistsService.create(createPsychologistDto);
    return res.status(HttpStatus.OK).json({
      message: 'Psychologist created successfully.',
      psychologist: newPsychologist
    });
  }

  @Post('register')
  async registerUser(@Res() res, @Body() createPsychologistDto: CreatePsychologistDto) {
      const newPsychologist = await this.psychologistsService.register(createPsychologistDto);
      if(newPsychologist){
          return res.status(HttpStatus.OK).json({
              message: 'Psychologist created successfully.'
          });
      }
      return res.message
  }

  @Get('all')
  async findAll(@Res() res:express.Response) {
    const tickets = await this.psychologistsService.findAll();
    return res.status(HttpStatus.OK).json(tickets);
  }

  @Get(':email')
  async findOne(@Res() res:express.Response, @Param('email') email: string) {
    const psychologist = await this.psychologistsService.findOne(email);
    if(!psychologist){
      throw new NotFoundException('Psychologist does not exist.');
    }
    return res.status(HttpStatus.OK).json(psychologist)
  }

  @Put(':email')
  async update(@Res() res:express.Response, @Param('email') email:string, @Body() updatePsychologistDto:UpdatePsychologistDto){
    const updatedPsychologist = await this.psychologistsService.update(email, updatePsychologistDto);
    if(!updatedPsychologist){
      throw new NotFoundException('Psychologist does not exist.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Psychologist updated successfully.',
      psychologist: updatedPsychologist
    });
  }

  @Post('login')
    async login(@Res({passthrough: true}) res:express.Response, @Body('email') email:string, @Body('password') password:string){
        const psychologist = await this.psychologistsService.login(email, password);
        console.log("secret" + this.configService.get("JWT_ACCESS_TOKEN_SECRET"))
        const accessToken = await this.jwtService.signAsync({
            firstName: psychologist.firstName,
            lastName: psychologist.lastName,
            email: psychologist.email
        }, {secret:this.configService.get("JWT_ACCESS_TOKEN_SECRET"),expiresIn: '10h'});
        const refreshToken = await this.jwtService.signAsync({
            firstName: psychologist.firstName,
            lastName: psychologist.lastName,
            email: psychologist.email
        },{secret:this.configService.get("JWT_ACCESS_TOKEN_SECRET")});
        res.status(200);
        res.cookie('refreshToken', refreshToken,{
            httpOnly: true,
            maxAge: 7*24*60*60*1000
        })
        return {token:accessToken};
    }

    @Get('authUser')
    async authUser(@Req() req:express.Request, @Res() res:express.Response){
        try{
            const accessToken = req.headers.authorization.replace('Bearer ','');
            const {email} = await this.jwtService.verifyAsync(accessToken);
            const psychologist = await this.psychologistsService.findOne(email);
            const authUser = {
                firstName: psychologist.firstName,
                lastName: psychologist.lastName,
                email: psychologist.email
            }
            return res.status(HttpStatus.OK).json(authUser);
        } catch(e) {
            throw new UnauthorizedException();
        }
    }

    @Post('refresh')
    async refresh(@Req() req:express.Request, @Res() res:express.Response){
        try {
            const refreshToken = req.cookies['refreshToken'];
            const {email} = await this.jwtService.verifyAsync(refreshToken,{secret:this.configService.get("JWT_ACCESS_TOKEN_SECRET")});
            const token = await this.jwtService.signAsync({email},{expiresIn:'30s'})
            return res.status(HttpStatus.OK).json({token});
        } catch(e) {
            throw new UnauthorizedException;
        }
    }

    @Post('logout')
    async logout(@Res({passthrough:true}) res: express.Response){
        res.clearCookie('refreshToken');
        return {message:'success'}
    }
}
