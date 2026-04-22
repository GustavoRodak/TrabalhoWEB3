import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { CategoriaService } from "./categoria.service";
import { criarCategoriaDto } from "./dto/dtoCriarCategoria";
import { AtualizarCategoriaDto } from "./dto/dtoAtualizarCategoria";
import { JwtAuthGuard } from "src/Auth/jwt.auth.guard";
import { Roles } from "src/Roles/roles";
import { RolesGuard } from "src/Roles/roles.guard";

@Controller("categoria")
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) { }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Post()
  create(@Body() criarCategoriaDto: criarCategoriaDto) {
    return this.categoriaService.create(criarCategoriaDto);
  }

  @Get()
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(":id")
  async findOndeById(@Param('id') id: string) {
    return await this.categoriaService.findById(id);
  }

  @Get(":id/cursos")
  listarCursos(@Param('id') id: string) {
    return this.categoriaService.listarCursos(id);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Put(":id")
  update(@Param('id') id: string, @Body() atualizarCategoriaDto: AtualizarCategoriaDto) {
    return this.categoriaService.update(id, atualizarCategoriaDto);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('ADMIN')
  @Delete(":id")
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(id);
  }

}