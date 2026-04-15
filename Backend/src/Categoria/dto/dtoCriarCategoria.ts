import { IsNotEmpty, IsString } from "class-validator";

export class criarCategoriaDto{

  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  descricao: string;

}