import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { criarCategoriaDto } from "./dto/dtoCriarCategoria";
import { AtualizarCategoriaDto } from "./dto/dtoAtualizarCategoria";
import { JwtAuthGuard } from "src/Auth/jwt.auth.guard";

@Controller("categoria")
export class CategoriaController{
  constructor(private readonly categoriaService: CategoriaService){}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() criarCategoriaDto: criarCategoriaDto){
    return this.categoriaService.create(criarCategoriaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(){
    return this.categoriaService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(":id")
  async findOndeById(@Param('id') id: string){
    return await this.categoriaService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put(":id")
  update(@Param('id') id:string, @Body() atualizarCategoriaDto: AtualizarCategoriaDto){
    return this.categoriaService.update(id, atualizarCategoriaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(":id")
  remove(@Param('id') id: string){
    return this.categoriaService.remove(id);
  }

}