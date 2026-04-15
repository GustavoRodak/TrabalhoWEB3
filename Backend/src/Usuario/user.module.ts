import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Usuario } from "./userEntity/user.entity";
import { UsuarioController } from "./user.controller";
import { UsuarioService } from "./user.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario])
  ],
  controllers: [UsuarioController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuarioModule{}