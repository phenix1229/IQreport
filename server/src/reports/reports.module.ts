import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReportSchema, ReportDocument } from 'src/schemas/report.schema';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
dotenv.config();

@Module({
  imports: [
      MongooseModule.forFeature([{name: Report.name, schema: ReportSchema}]),
      JwtModule.register({
        secret: process.env.JWT_ACCESS_TOKEN_SECRET,
        signOptions: {expiresIn: '1w'}
      })
    ],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
