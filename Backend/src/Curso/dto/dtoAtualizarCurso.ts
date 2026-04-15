import { PartialType } from "@nestjs/mapped-types";
import { CriarCursoDto } from "./dtoCriarCurso";

export class AtualizarCursoDto extends PartialType(CriarCursoDto){}