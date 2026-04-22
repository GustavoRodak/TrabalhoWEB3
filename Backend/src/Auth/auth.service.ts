import { Injectable, NotFoundException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from 'bcrypt';
import { LoginDto } from "./dto/loginDto";
import { UsuarioService } from "src/Usuario/user.service";

@Injectable()
export class AuthService {
    constructor(
        private userService: UsuarioService,
        private jwtService: JwtService
    ) { }

    async login(dto: LoginDto): Promise<{ accessToken: string }> {

        const user = await this.userService.findByEmail(dto.email)
        if (!user) throw new NotFoundException("Credenciais invalidas")

        const isMatch = await bcrypt.compare(dto.senha, user.senha)
        if (!isMatch) throw new NotFoundException("Credenciais invalidas")

        const payload = {
            sub: user.id,
            tipo: user.tipoAcesso
        }
        return {
            accessToken: await this.jwtService.signAsync(payload)
        }

    }

}
