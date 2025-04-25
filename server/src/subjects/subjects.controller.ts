import { Controller, Get, Post, Body, Param, Res, HttpStatus, NotFoundException, Put } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import * as express from 'express';

@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
    create(@Body() createSubjectDto: CreateSubjectDto) {
      return this.subjectsService.create(createSubjectDto);
    }

  @Get('all')
  async findAll(@Res() res:express.Response) {
    const subjects = await this.subjectsService.findAll();
    return res.status(HttpStatus.OK).json(subjects);
  }

  @Get(':email')
  findOne(@Param('email') email: string) {
    return this.subjectsService.findOne(email);
  }

  @Put(':email')
  async update(@Res() res:express.Response, @Param('email') email:string, @Body() updateSubjectDto:UpdateSubjectDto){
    const updatedSubject = await this.subjectsService.update(email, updateSubjectDto);
    if(!updatedSubject){
      throw new NotFoundException('Subject does not exist.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Subject updated successfully.',
      subject: updatedSubject
    });
  }
}
