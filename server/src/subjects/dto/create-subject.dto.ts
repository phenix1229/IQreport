import { IsEmail, IsNotEmpty, IsOptional, IsArray, IsString, IsPhoneNumber, IsEnum } from "class-validator";

export class CreateSubjectDto {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
    
    @IsOptional()
    @IsArray()
    reports?: [String];
}