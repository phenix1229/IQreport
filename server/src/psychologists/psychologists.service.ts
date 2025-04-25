import { BadRequestException, ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Psychologist, PsychologistDocument } from 'src/schemas/psychologist.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PsychologistsService {
  constructor(@InjectModel('Psychologist') private psychologistModel: Model<PsychologistDocument>){}
  
  async create(createPsychologistDto: CreatePsychologistDto): Promise<Psychologist> {
    const psychologist = await new this.psychologistModel(createPsychologistDto).save();
    return psychologist;
  }

  async register(createPsychologistDto: CreatePsychologistDto): Promise<Psychologist> {
    if(await this.psychologistModel.findOne({email:createPsychologistDto.email})){
        throw new ConflictException('This username/email already exists.');
    }
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(createPsychologistDto.password, salt);
    createPsychologistDto.password = hashedPassword;
    const psychologist = await new this.psychologistModel(createPsychologistDto).save();
    return psychologist;
}

  async findAll(): Promise<Psychologist[]> {
    return await this.psychologistModel.find();
  }

  async findOne(email: string): Promise<Psychologist> {
    const psychologist = await this.psychologistModel.findOne({email});
    if(!psychologist){
      throw new NotFoundException();
    }
    return psychologist;
  }

  async update(email: string, updatePsychologistDto: UpdatePsychologistDto): Promise<Psychologist> {
    const psychologist = await this.psychologistModel.findOne({email});
        if(!psychologist){
            throw new NotFoundException('Psychologist does not exist.');
        }
        const updatedPsychologist = await this.psychologistModel.updateOne({email}, {$set: {...updatePsychologistDto}});
        return psychologist;
  }

  async login(email: string, password: string): Promise<Psychologist>{
    const psychologist = await this.psychologistModel.findOne({email});
    if(!psychologist || !await bcrypt.compare(password, psychologist.password)){
        throw new BadRequestException('Invalid credentials.')
    }
    return psychologist;
}
}
