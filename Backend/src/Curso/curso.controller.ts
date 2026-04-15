import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CursoService } from "./curso.service";
import { CriarCursoDto } from "./dto/dtoCriarCurso";
import { AtualizarCursoDto } from "./dto/dtoAtualizarCurso";

@Controller("curso")
export class CursoController{
  constructor(private readonly cursoService: CursoService){}

  @Post()
  create(@Body() criarCursoDto: CriarCursoDto){
    return this.cursoService.create(criarCursoDto);
  }

  @Get()
  findAll(){
    return this.cursoService.findAll();
  }

  @Get(":id")
  async findOneById(@Param('id') id:string){
    return await this.cursoService.findById(id);
  }

  @Put(":id")
  update(@Param('id') id:string, @Body() atualizarCursoDto: AtualizarCursoDto){
    return this.cursoService.update(id, atualizarCursoDto);
  }

  @Delete(":id")
  remove(@Param('id') id:string){
    return this.cursoService.remove(id);
  }

  
}