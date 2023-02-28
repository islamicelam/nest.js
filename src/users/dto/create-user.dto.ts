import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

    @ApiProperty({example: "example@gmail.com", description: "Email"})
    readonly email: string
    @ApiProperty({example: "Aa1234!", description: "Password"})
    readonly password: string
}