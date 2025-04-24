import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReportDocument = HydratedDocument<Report>;

@Schema()
export class Report {
    @Prop()
    subjectFirstName: string
    
    @Prop()
    subjectLastName: string

    @Prop()
    psychologistFirstName: string
    
    @Prop()
    psychologistLastName: string

    @Prop()
    testDate: string

    @Prop()
    birthDate: string

    @Prop({type:Array})
    testAge: number[]

    @Prop({type:Object})
    blockDesign?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    similarities?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    matrixReasoning?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    digitSpan?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    coding?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    vocabulary?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    figureWeights?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    visualPuzzles?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    pictureSpan?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    symbolSearch?: {rawScore:Number,scaledScore:Number}

    @Prop({type:Object})
    scaledScoreToComposite?: {
        verbalComprehension:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        visuoSpacial:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        fluidReasoning:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        workingMemory:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        processingSpeed:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        fullScale:{sumOfScale:Number,compositeScore:Number,percentRank:String}
    }
    
    @Prop({type:Object})
    reportDetails?: {
        reasoningAbilities:String,
        languageAbilities:String,
        visuospacialAbilities:String,
        memory:String,
        executiveFunction:String
    }
}

export const ReportSchema = SchemaFactory.createForClass(Report);