import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { MatriculaService } from "./matricula.service";
import { CriarMatriculaDto } from "./dto/CriarMatriculaDto";
import { JwtAuthGuard } from "src/Auth/jwt.auth.guard";

@Controller("matricula")
export class MatriculaController {

  constructor(private readonly matriculaService: MatriculaService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() criarMatriculaDto: CriarMatriculaDto) {
    return this.matriculaService.create(criarMatriculaDto);
  }

  @Get()
  findAll() {
    return this.matriculaService.findAll();
  }

  @Get(":id")
  async findOneById(@Param('id') id: string) {
    return await this.matriculaService.findById(id);
  }

  @Delete(":id")
  remove(@Param('id') id: string) {
    return this.matriculaService.remove(id);
  }

}