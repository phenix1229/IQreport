import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { PsychologistsModule } from './psychologists/psychologists.module';
import { PsychologistSchema } from './schemas/psychologist.schema';
import { PsychologistsService } from './psychologists/psychologists.service';

@Module({
  imports: [PsychologistsModule.forRootAsync({
    inject: [ConfigService], 
    useFactory: async (configSecret: ConfigService) => ({
      uri: configSecret.get("MONGO_URI")
    })
  }),
  MongooseModule.forFeature([{
    name: 'Psychologist', schema: PsychologistSchema
  }]),
  // MongooseModule.forFeature([{
  //   name: 'Ticket', schema: TicketSchema
  // }]),
  ConfigModule.forRoot({
    isGlobal: true
  })

  ],
  controllers: [AppController],
  providers: [
    AppService,
    PsychologistsService,
    JwtService
  ],
})
export class AppModule {}
