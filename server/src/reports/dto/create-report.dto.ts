import { IsString, IsObject, IsArray, IsOptional, IsEmail } from "class-validator"

export class CreateReportDto {
    @IsString()
    subjectFirstName: string
   
    @IsString()
    subjectLastName: string
    
    @IsEmail()
    subjectEmail: string
   
    @IsString()
    psychologistFirstName: string
    
    @IsString()
    psychologistLastName: string
    
    @IsEmail()
    psychologistEmail: string

    @IsString()
    testDate: string

    @IsString()
    birthDate: string

    @IsArray()
    testAge: [number]

    @IsObject()
    @IsOptional()
    blockDesign: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    similarities: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    matrixReasoning: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    digitSpan: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    coding: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    vocabulary: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    figureWeights: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    visualPuzzles: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    pictureSpan: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    symbolSearch: {rawScore:Number,scaledScore:Number}

    @IsObject()
    @IsOptional()
    scaledScoreToComposite: {
        verbalComprehension:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        visuoSpacial:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        fluidReasoning:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        workingMemory:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        processingSpeed:{sumOfScale:Number,compositeScore:Number,percentRank:String},
        fullScale:{sumOfScale:Number,compositeScore:Number,percentRank:String}
    }
    
    @IsObject()
    @IsOptional()
    reportDetails: {
        reasoningAbilities:String,
        languageAbilities:String,
        visuospacialAbilities:String,
        memory:String,
        executiveFuntion:String
    }
}