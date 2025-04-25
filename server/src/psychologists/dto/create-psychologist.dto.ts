import { IsEmail, IsNotEmpty, IsOptional, IsArray, IsString, IsPhoneNumber, IsEnum } from "class-validator"

export class CreatePsychologistDto {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsNotEmpty()
    @IsString()
    email: String

    @IsNotEmpty()
    @IsString()
    password: String
}