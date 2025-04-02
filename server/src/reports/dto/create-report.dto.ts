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
    blockDesign: object = {}

    @IsNotEmpty()
    @IsObject()
    similarities: object = {}

    @IsNotEmpty()
    @IsObject()
    matrixReasoning: object = {}

    @IsNotEmpty()
    @IsObject()
    digitSpan: object = {}

    @IsNotEmpty()
    @IsObject()
    coding: object = {}

    @IsNotEmpty()
    @IsObject()
    vocabulary: object = {}

    @IsNotEmpty()
    @IsObject()
    figureWeights: object = {}

    @IsNotEmpty()
    @IsObject()
    visualPuzzles: object = {}

    @IsNotEmpty()
    @IsObject()
    pictureSpan: object = {}

    @IsNotEmpty()
    @IsObject()
    symbolSearch: object = {}

    @IsNotEmpty()
    @IsObject()
    scaledScoreToComposite: object = {}
}