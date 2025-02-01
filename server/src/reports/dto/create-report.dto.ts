import { IsNotEmpty, IsString, IsObject } from "class-validator"

export class CreateReportDto {
   @IsNotEmpty()
   @IsString()
    subjectName: string
   
    @IsNotEmpty()
    @IsString()
    psycologistName: string

    @IsNotEmpty()
    @IsString()
    testDate: string

    @IsNotEmpty()
    @IsString()
    birthDate: string

    @IsNotEmpty()
    @IsString()
    testAge: string

    @IsNotEmpty()
    @IsString()
    blockDesign: object

    @IsNotEmpty()
    @IsObject()
    similarities: object

    @IsNotEmpty()
    @IsObject()
    matrixReasoning: object

    @IsNotEmpty()
    @IsObject()
    digitSpan: object

    @IsNotEmpty()
    @IsObject()
    coding: object

    @IsNotEmpty()
    @IsObject()
    vocabulary: object

    @IsNotEmpty()
    @IsObject()
    figureWeights: object

    @IsNotEmpty()
    @IsObject()
    visualPuzzles: object

    @IsNotEmpty()
    @IsObject()
    pictureSpan: object

    @IsNotEmpty()
    @IsObject()
    symbolSearch: object

    @IsNotEmpty()
    @IsObject()
    scaledScoreToComposite: object
}