import { Controller, Get, Post, Body, Param, Put, HttpStatus, Res, NotFoundException } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import * as express from 'express';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Post()
  async create(@Res() res:express.Response, @Body() createReportDto: CreateReportDto) {
    const newReport = this.reportsService.create(createReportDto);
    return res.status(HttpStatus.OK).json({
      message: 'Report created successfully.',
      report: newReport
    });
  }

  @Get('all')
  async findAll(@Res() res:express.Response) {
    const reports = await this.reportsService.findAll();
    return res.status(HttpStatus.OK).json(reports);
  }

  @Get(':id')
  async findOne(@Res() res:express.Response, @Param('id') id: string) {
    const report = await this.reportsService.findOne(id);
    if(!report){
      throw new NotFoundException('Report does not exist.');
    }
    return res.status(HttpStatus.OK).json(report)
  }

  @Put(':id')
  async update(@Res() res:express.Response, @Param('id') id:string, @Body() updateReportDto:UpdateReportDto){
    const updatedReport = await this.reportsService.update(id, updateReportDto);
    if(!updatedReport){
      throw new NotFoundException('Report does not exist.');
    }
    return res.status(HttpStatus.OK).json({
      message: 'Report updated successfully.',
      report: updatedReport
    });
  }
}
