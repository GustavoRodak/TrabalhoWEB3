import { IsDate, IsString } from "class-validator";

export class CriarMatriculaDto {

  @IsDate()
  dataMatricula: Date

  @IsString()
  usuarioId: string;

  @IsString()
  cursoId: string;

}