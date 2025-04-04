import { IsNotEmpty, IsString, IsArray, IsOptional, IsEmail } from "class-validator"

export class CreateSubjectDto {
   @IsNotEmpty()
   @IsString()
   firstName: string
   
   @IsNotEmpty()
   @IsString()
   lastName: string
   
   @IsNotEmpty()
   @IsEmail()
   email: string
   
   @IsNotEmpty()
   @IsString()
   birthMonth: string

   @IsNotEmpty()
   @IsString()
   birthDay: string

   @IsNotEmpty()
   @IsString()
   birthYear: string

   @IsOptional()
   @IsArray()
   reports
}
