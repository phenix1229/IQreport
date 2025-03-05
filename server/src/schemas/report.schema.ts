import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop()
    subjectName: string

    @Prop()
    psychologistName: string

    @Prop()
    testDate: string

    @Prop()
    birthDate: string

    @Prop()
    testAge: string

    @Prop({type:Object})
    blockDesign: object

    @Prop({type:Object})
    similarities: object

    @Prop({type:Object})
    matrixReasoning: object

    @Prop({type:Object})
    digitSpan: object

    @Prop({type:Object})
    coding: object

    @Prop({type:Object})
    vocabulary: object

    @Prop({type:Object})
    figureWeights: object

    @Prop({type:Object})
    visualPuzzles: object

    @Prop({type:Object})
    pictureSpan: object

    @Prop({type:Object})
    symbolSearch: object

    @Prop({type:Object})
    scaledScoreToComposite: object
}

export const ReportSchema = SchemaFactory.createForClass(Report);