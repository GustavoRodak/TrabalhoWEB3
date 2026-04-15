import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CriarCursoDto{

  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsNumber()
  cargaHoraria: number;
}