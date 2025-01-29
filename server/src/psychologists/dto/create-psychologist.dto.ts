import { IsEmail, IsNotEmpty, IsOptional, IsArray, IsString, IsPhoneNumber, IsEnum } from "class-validator"

export class CreatePsychologistDto {
    @IsNotEmpty()
    @IsString()
    openedBy: string;

    @IsNotEmpty()
    @IsString()
    clientName: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    clientPhone: string;

    @IsNotEmpty()
    @IsPhoneNumber()
    clientCell: string;

    @IsNotEmpty()
    @IsEmail()
    clientEmail: string;

    @IsNotEmpty()
    @IsString()
    clientLocation: string;

    @IsNotEmpty()
    @IsString()
    description: string;
    
    @IsOptional()
    @IsArray()
    updateComments?: [Object];
}