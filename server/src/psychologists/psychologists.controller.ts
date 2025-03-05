import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { PsychologistsService } from './psychologists.service';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import * as express from 'express';

@Controller('psychologists')
export class PsychologistsController {
  constructor(private readonly psychologistsService: PsychologistsService) {}

  @Post()
  async create(@Res() res:express.Response, @Body() createPsychologistDto: CreatePsychologistDto) {
    const newPsychologist = this.psychologistsService.create(createPsychologistDto);
    return res.status(HttpStatus.OK).json({
      message: 'Psychologist created successfully.',
      ticket: newPsychologist
    });
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
}
