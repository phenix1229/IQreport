import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop()
    subjectName: string

    @Prop()
    psycologistName: string

    @Prop()
    testDate: string

    @Prop()
    birthDate: string

    @Prop()
    testAge: string

    @Prop()
    blockDesign: object

    @Prop()
    similarities: object

    @Prop()
    matrixReasoning: object

    @Prop()
    digitSpan: object

    @Prop()
    coding: object

    @Prop()
    vocabulary: object

    @Prop()
    figureWeights: object

    @Prop()
    visualPuzzles: object

    @Prop()
    pictureSpan: object

    @Prop()
    symbolSearch: object

    @Prop()
    scaledScoreToComposite: object
}

export const ReportSchema = SchemaFactory.createForClass(Report);