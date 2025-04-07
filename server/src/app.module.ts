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
import { SubjectsModule } from './subjects/subjects.module';
import { SubjectsService } from './subjects/subjects.service';
import { SubjectSchema } from './schemas/subject.schema';

@Module({
  imports: [
    PsychologistsModule,
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
    MongooseModule.forFeature([{
      name: 'Subject', schema: SubjectSchema
    }]),
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ReportsModule,
    SubjectsModule,
    PsychologistsModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PsychologistsService,
    ReportsService,
    SubjectsService,
    JwtService
  ],
})
export class AppModule {}
