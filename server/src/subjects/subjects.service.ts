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
    const subject = await new this.subjectModel(createSubjectDto).save();
    return subject;
  }

  async findAll(): Promise<Subject[]> {
    return await this.subjectModel.find();
  }

  async findOne(id: string) {
    const subject = await this.subjectModel.findById({_id:id});
    if(!subject){
      throw new NotFoundException();
    }
    return subject;
  }

  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    const subject = await this.subjectModel.findOne({_id:id});
    if(!subject){
        throw new NotFoundException('Subject does not exist.');
    }
    const updatedSubject = await this.subjectModel.updateOne({_id:id}, {$set: {...updateSubjectDto}});
    return subject;
  }
}
