import { UsuarioModule } from "src/Usuario/user.module";
import { CursoModule } from "src/Curso/curso.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Matricula } from "./entity/Matricula.entity";
import { MatriculaController } from "./matricula.controller";
import { MatriculaService } from "./matricula.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Matricula]),
    UsuarioModule,
    CursoModule
  ],
  controllers: [MatriculaController],
  providers: [MatriculaService],
  exports: [MatriculaService]
})
export class MatriculaModule{}