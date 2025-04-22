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

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    blockDesign: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    similarities: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    matrixReasoning: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    digitSpan: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    coding: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    vocabulary: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    figureWeights: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    visualPuzzles: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    pictureSpan: object

    @Prop({type:Object, required:true, default: {rawScore:0,scaledScore:0}})
    symbolSearch: object

    @Prop({type:Object, required:true, default: {
        verbalComprehension:{sumOfScale:0,compositeScore:0,percentRank:''},
        visuoSpacial:{sumOfScale:0,compositeScore:0,percentRank:''},
        fluidReasoning:{sumOfScale:0,compositeScore:0,percentRank:''},
        workingMemory:{sumOfScale:0,compositeScore:0,percentRank:''},
        processingSpeed:{sumOfScale:0,compositeScore:0,percentRank:''},
        fullScale:{sumOfScale:0,compositeScore:0,percentRank:''}
    }})
    scaledScoreToComposite: object
    
    @Prop({type:Object, required:true, default: {
        reasoningAbilities:'',
        languageAbilities:'',
        visuopacialAbilities:'',
        memory:'',
        executiveFunction:''
    }})
    reportDetails: object
}

export const ReportSchema = SchemaFactory.createForClass(Report);