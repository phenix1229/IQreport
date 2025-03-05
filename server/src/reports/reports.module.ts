import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Report, ReportSchema } from 'src/schemas/report.schema';
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
export class ReportsModule {
  static forRootAsync(arg0: { inject: ConfigService[]; useFactory: (configSecret: ConfigService) => Promise<{ uri: any; }>; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
