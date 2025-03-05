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

  async findOne(id: string) {
    const report = await this.reportModel.findById({_id:id});
    if(!report){
      throw new NotFoundException();
    }
    return report;
  }

  async update(id: string, updateReportDto: UpdateReportDto) {
    const report = await this.reportModel.findOne({id});
    if(!report){
        throw new NotFoundException('Report does not exist.');
    }
    const updatedReport = await this.reportModel.updateOne({id}, {$set: {...updateReportDto}});
    return report;
  }
}
