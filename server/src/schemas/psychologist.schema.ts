import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type PsychologistDocument = HydratedDocument<Psychologist>;

@Schema()
export class Psychologist {
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    email: String

    @Prop()
    password: String

    @Prop([String])
    reports?: String[]
}

export const PsychologistSchema = SchemaFactory.createForClass(Psychologist);