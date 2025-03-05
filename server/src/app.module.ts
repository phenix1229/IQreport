import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PsychologistsModule } from './psychologists/psychologists.module';
import { PsychologistSchema } from './schemas/psychologist.schema';
import { PsychologistsService } from './psychologists/psychologists.service';
import { ReportsModule } from './reports/reports.module';
import { ReportSchema } from './schemas/report.schema';
import { ReportsService } from './reports/reports.service';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [PsychologistsModule,
    MongooseModule.forRootAsync({
    inject: [ConfigService], 
    useFactory: async (configSecret:ConfigService ) => ({
      uri: configSecret.get("MONGO_URI")
    })
  }),
  MongooseModule.forFeature([{
    name: 'Psychologist', schema: PsychologistSchema
  }]),
  MongooseModule.forFeature([{
    name: 'Report', schema: ReportSchema
  }]),
  ConfigModule.forRoot({
    isGlobal: true
  }),
  ReportsModule

  ],
  controllers: [AppController],
  providers: [
    AppService,
    PsychologistsService,
    ReportsService,
    JwtService
  ],
})
export class AppModule {}
