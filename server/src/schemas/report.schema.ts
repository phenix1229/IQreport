import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop({required:true})
    subjectFirstName: string
    
    @Prop({required:true})
    subjectLastName: string

    @Prop({required:true})
    psychologistFirstName: string
    
    @Prop({required:true})
    psychologistLastName: string

    @Prop({required:true, type:Array})
    testDate: number[]

    @Prop({required:true, type:Array})
    birthDate: number[]

    @Prop({required:true, type:Array})
    testAge: number[]

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