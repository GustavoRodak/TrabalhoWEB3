import { IsDate } from "class-validator";

export class CriarMatriculaDto{

  @IsDate()
  dataMatricula: Date

}