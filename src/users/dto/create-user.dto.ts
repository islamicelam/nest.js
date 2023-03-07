import {ApiProperty} from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: "example@gmail.com", description: "Email"})
    @IsString({message: "Should be string"})
    @IsEmail({}, {message: "Wrong email"})
    readonly email: string
    @ApiProperty({example: "Aa1234!", description: "Password"})
    @IsString({message: "Should be string"})
    @Length(4, 16 , {message: "Should be 4-16 symbols"})
    readonly password: string
}