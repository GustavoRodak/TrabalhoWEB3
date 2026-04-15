import { IsNotEmpty, IsString } from "class-validator";
import { TipoAcesso } from "src/Enum/TipoAcesso";

export class CriarUsuarioDto{

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  tipo: TipoAcesso;
}