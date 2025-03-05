import { Module } from '@nestjs/common';
import { PsychologistsService } from './psychologists.service';
import { PsychologistsController } from './psychologists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Psychologist, PsychologistSchema } from 'src/schemas/psychologist.schema';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{name: Psychologist.name, schema: PsychologistSchema}]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: {expiresIn: '1w'}
    })
  ],
  controllers: [PsychologistsController],
  providers: [PsychologistsService],
})
export class PsychologistsModule {
  static forRootAsync(arg0: { inject: ConfigService[]; useFactory: (configSecret: ConfigService) => Promise<{ uri: any; }>; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
