import { IsNotEmpty, IsString, IsObject, IsArray } from "class-validator"

export class CreateReportDto {
   @IsNotEmpty()
   @IsString()
    subjectFirstName: string
   
    @IsNotEmpty()
   @IsString()
    subjectLastName: string
   
    @IsNotEmpty()
    @IsString()
    psychologistFirstName: string
    
    @IsNotEmpty()
    @IsString()
    psychologistLastName: string

    @IsNotEmpty()
    @IsArray()
    testDate: [number]

    @IsNotEmpty()
    @IsArray()
    birthDate: [number]

    @IsNotEmpty()
    @IsArray()
    testAge: [number]

    @IsNotEmpty()
    @IsObject()
    blockDesign: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    similarities: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    matrixReasoning: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    digitSpan: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    coding: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    vocabulary: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    figureWeights: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    visualPuzzles: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    pictureSpan: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    symbolSearch: object = {rawScore:0,scaledScore:0}

    @IsNotEmpty()
    @IsObject()
    scaledScoreToComposite: object = {
        verbalComprehension:{sumOfScale:0,compositeScore:0,percentRank:''},
        visuoSpacial:{sumOfScale:0,compositeScore:0,percentRank:''},
        fluidReasoning:{sumOfScale:0,compositeScore:0,percentRank:''},
        workingMemory:{sumOfScale:0,compositeScore:0,percentRank:''},
        processingSpeed:{sumOfScale:0,compositeScore:0,percentRank:''},
        fullScale:{sumOfScale:0,compositeScore:0,percentRank:''}
    }
    
    @IsNotEmpty()
    @IsObject()
    reportDetails: object = {
        reasoningAbilities:'',
        languageAbilities:'',
        visuospacialAbilities:'',
        memory:'',
        executiveFuntion:''
    }
}