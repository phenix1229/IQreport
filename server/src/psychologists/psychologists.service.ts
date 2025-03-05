import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePsychologistDto } from './dto/create-psychologist.dto';
import { UpdatePsychologistDto } from './dto/update-psychologist.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Psychologist, PsychologistDocument } from 'src/schemas/psychologist.schema';

@Injectable()
export class PsychologistsService {
  constructor(@InjectModel('Psychologist') private psychologistModel: Model<PsychologistDocument>){}
  
  async create(createPsychologistDto: CreatePsychologistDto): Promise<Psychologist> {
    const psychologist = await new this.psychologistModel(createPsychologistDto).save();
    return psychologist;
  }

  async findAll(): Promise<Psychologist[]> {
    return await this.psychologistModel.find();
  }

  async findOne(email: string) {
    const ticket = await this.psychologistModel.findById({email});
    if(!ticket){
      throw new NotFoundException();
    }
    return ticket;
  }

  async update(email: string, updatePsychologistDto: UpdatePsychologistDto) {
    const psychologist = await this.psychologistModel.findOne({email});
        if(!psychologist){
            throw new NotFoundException('Psychologist does not exist.');
        }
        const updatedPsychologist = await this.psychologistModel.updateOne({email}, {$set: {...updatePsychologistDto}});
        return psychologist;
  }
}
