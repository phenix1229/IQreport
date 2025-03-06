import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop({required:true})
    subjectName: string

    @Prop({required:true})
    psychologistName: string

    @Prop({required:true})
    testDate: string

    @Prop({required:true})
    birthDate: string

    @Prop({required:true})
    testAge: string

    @Prop({type:Object, required:true})
    blockDesign: object

    @Prop({type:Object, required:true})
    similarities: object

    @Prop({type:Object, required:true})
    matrixReasoning: object

    @Prop({type:Object, required:true})
    digitSpan: object

    @Prop({type:Object, required:true})
    coding: object

    @Prop({type:Object, required:true})
    vocabulary: object

    @Prop({type:Object, required:true})
    figureWeights: object

    @Prop({type:Object, required:true})
    visualPuzzles: object

    @Prop({type:Object, required:true})
    pictureSpan: object

    @Prop({type:Object, required:true})
    symbolSearch: object

    @Prop({type:Object, required:true})
    scaledScoreToComposite: object
}

export const ReportSchema = SchemaFactory.createForClass(Report);