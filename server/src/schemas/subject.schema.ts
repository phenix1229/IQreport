import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
    @Prop({required:true})
    firstName: string

    @Prop({required:true})
    lastName: string
    
    @Prop({required:true})
    email: string

    @Prop({required:true})
    birthMonth: String
    
    @Prop({required:true})
    birthDay: String
    
    @Prop({required:true})
    birthYear: String

    @Prop([String])
    reports?: String[]
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);