import { Controller, Get, Post, Body, Param, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import * as express from 'express';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

@Post()
  async create(@Res() res:express.Response, @Body() createSubjectDto: CreateSubjectDto) {
    const newSubject = this.subjectsService.create(createSubjectDto);
    return res.status(HttpStatus.OK).json({
      message: 'Subject created successfully.',
      subject: newSubject
    });
  }

  @Get('all')
  async findAll(@Res() res:express.Response) {
    const subjects = await this.subjectsService.findAll();
    return res.status(HttpStatus.OK).json(subjects);
  }

  @Get(':id')
  async findOne(@Res() res:express.Response, @Param('id') id: string) {
    const subject = await this.subjectsService.findOne(id);
    if(!subject){
      throw new NotFoundException('Subject does not exist.');
    }
    return res.status(HttpStatus.OK).json(subject)
  }

  @Put(':id')
  async update(@Res() res:express.Response, @Param('id') id:string, @Body() updateSubjectDto:UpdateSubjectDto){
    const updatedSubject = await this.subjectsService.update(id, updateSubjectDto);
    if(!updatedSubject){
      throw new NotFoundException('Subject does not exist.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Subject updated successfully.',
      subject: updatedSubject
    });
  }
}
