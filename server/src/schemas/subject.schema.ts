import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubjectDocument = HydratedDocument<Subject>;

@Schema()
export class Subject {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop([String])
    reports: String[]
}

export const SubjectSchema = SchemaFactory.createForClass(Subject);