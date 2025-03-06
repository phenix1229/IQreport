import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PsychologistDocument = HydratedDocument<Psychologist>;

@Schema()
export class Psychologist {
    @Prop({required:true})
    firstName: string

    @Prop({required:true})
    lastName: string

    @Prop({required:true})
    email: String

    @Prop({required:true})
    password: String

    @Prop([String])
    reports?: String[]
}

export const PsychologistSchema = SchemaFactory.createForClass(Psychologist);