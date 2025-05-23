import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subject, SubjectDocument } from 'src/schemas/subject.schema';

@Injectable()
export class SubjectsService {
  constructor(@InjectModel('Subject') private subjectModel: Model<SubjectDocument>){}
  
  async create(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    if(await this.subjectModel.findOne({email:createSubjectDto.email})){
      return await this.subjectModel.findOne({email:createSubjectDto.email})
    }
    const subject = await new this.subjectModel(createSubjectDto).save();
    return subject;
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectModel.find();
  }

  async findOne(email: string) {
    const subject = await this.subjectModel.findOne({email});
    if(!subject){
      throw new NotFoundException('Subject does not exist.');
    }
    return subject;
  }

  async update(email: string, updateSubjectDto: UpdateSubjectDto) {
    const subject = await this.subjectModel.findOne({email});
    if(!subject){
        throw new NotFoundException('Subject does not exist.');
    }
    const updatedSubject = await this.subjectModel.updateOne({email}, {$set: {...updateSubjectDto}});
    return subject;
  }
}
