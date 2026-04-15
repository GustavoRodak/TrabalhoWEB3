import { PartialType } from "@nestjs/mapped-types";
import { CriarUsuarioDto } from "./dtoCriarUsuario";

export class AtualizarUsuarioDto extends PartialType(CriarUsuarioDto){}