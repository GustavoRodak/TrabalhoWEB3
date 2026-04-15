import { PartialType } from "@nestjs/mapped-types";
import { criarCategoriaDto } from "./dtoCriarCategoria";

export class AtualizarCategoriaDto extends PartialType(criarCategoriaDto){}