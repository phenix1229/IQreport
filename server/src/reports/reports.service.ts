import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReportDto } from './dto/create-report.dto';
import { UpdateReportDto } from './dto/update-report.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Report, ReportDocument } from 'src/schemas/report.schema';

@Injectable()
export class ReportsService {
  constructor(@InjectModel('Report') private reportModel: Model<ReportDocument>){}

  async create(createReportDto: CreateReportDto): Promise<Report> {
    const report = await new this.reportModel(createReportDto).save();
    return report;
  }

  async findAll(): Promise<Report[]> {
    return await this.reportModel.find();
  }

  async findOne(id: string):Promise<Report> {
    const report = await this.reportModel.findById({_id:id});
    if(!report){
      throw new NotFoundException();
    }
    return report;
  }
  
  async findAllSubject(email: string):Promise<Report[]> {
    const reports = await this.reportModel.find({subjectEmail:email});
    if(!reports){
      throw new NotFoundException();
    }
    return reports;
  }

  async update(id: string, updateReportDto: UpdateReportDto):Promise<Report> {
    const report = await this.reportModel.findOne({_id:id});
    if(!report){
        throw new NotFoundException('Report does not exist.');
    }
    const updatedReport = await this.reportModel.updateOne({_id:id}, {$set: {...updateReportDto}});
    return report;
  }
}
