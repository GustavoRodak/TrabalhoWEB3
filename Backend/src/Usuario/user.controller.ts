import { Body, Controller, Delete, Get, Param, Post, Put, Req, Request } from "@nestjs/common";
import { UsuarioService } from "./user.service";
import { CriarUsuarioDto } from "./dto/dtoCriarUsuario";
import { AtualizarUsuarioDto } from "./dto/dtoAtualizarUsuario";

@Controller("usuario")
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) { }

  @Post()
  create(@Body() criarUsuarioDto: CriarUsuarioDto) {
    return this.usuarioService.create(criarUsuarioDto);
  }

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }

  @Get(":id")
  async findOneById(@Param('id') id: string) {
    return await this.usuarioService.findById(id);
  }

  @Get(":id/cursos")
  listarCursos(@Param('id') id: string) {
    return this.usuarioService.listarCursos(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() atualizarUsuarioDto: AtualizarUsuarioDto) {
    return this.usuarioService.update(id, atualizarUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuarioService.remove(id);
  }


}