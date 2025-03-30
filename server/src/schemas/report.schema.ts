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

    @Prop({type:Object, required:true, default: {}})
    blockDesign: object

    @Prop({type:Object, required:true, default: {}})
    similarities: object

    @Prop({type:Object, required:true, default: {}})
    matrixReasoning: object

    @Prop({type:Object, required:true, default: {}})
    digitSpan: object

    @Prop({type:Object, required:true, default: {}})
    coding: object

    @Prop({type:Object, required:true, default: {}})
    vocabulary: object

    @Prop({type:Object, required:true, default: {}})
    figureWeights: object

    @Prop({type:Object, required:true, default: {}})
    visualPuzzles: object

    @Prop({type:Object, required:true, default: {}})
    pictureSpan: object

    @Prop({type:Object, required:true, default: {}})
    symbolSearch: object

    @Prop({type:Object, required:true, default: {}})
    scaledScoreToComposite: object
}

export const ReportSchema = SchemaFactory.createForClass(Report);