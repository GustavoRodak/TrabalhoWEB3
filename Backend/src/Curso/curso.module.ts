import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Curso } from "./cursoEntity/curso.entity";
import { CursoController } from "./curso.controller";
import { CursoService } from "./curso.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Curso])
  ],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService]
})
export class CursoModule{}