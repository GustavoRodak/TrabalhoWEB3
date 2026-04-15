import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/loginDto";

@Controller('/login')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @Post()
    SingIn(@Body() dto: LoginDto){
        return this.authService.login(dto);
    }
}
