import { IsDate, IsString } from "class-validator";

export class CriarMatriculaDto {

  @IsString()
  usuarioId: string;

  @IsString()
  cursoId: string;

}