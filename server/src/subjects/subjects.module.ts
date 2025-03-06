import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Subject, SubjectSchema } from 'src/schemas/subject.schema';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';
import { ConfigService } from '@nestjs/config';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forFeature([{name: Subject.name, schema: SubjectSchema}]),
    JwtModule.register({
      secret: process.env.JWT_ACCESS_TOKEN_SECRET,
      signOptions: {expiresIn: '1w'}
    })
  ],
  controllers: [SubjectsController],
  providers: [SubjectsService],
})
export class SubjectsModule {
  static forRootAsync(arg0: { inject: ConfigService[]; useFactory: (configSecret: ConfigService) => Promise<{ uri: any; }>; }): import("@nestjs/common").Type<any> | import("@nestjs/common").DynamicModule | Promise<import("@nestjs/common").DynamicModule> | import("@nestjs/common").ForwardReference<any> {
    throw new Error('Method not implemented.');
  }
}
