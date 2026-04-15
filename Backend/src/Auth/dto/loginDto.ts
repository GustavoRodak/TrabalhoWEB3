import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDto{

    @IsNotEmpty({ message: 'O email não pode ser vazio!' })
    @IsEmail({}, { message: 'Insira um email válido!' })
    email: string;
}