import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Categoria } from "./categoriaEntity/categora.entity";
import { Repository } from "typeorm";
import { criarCategoriaDto } from "./dto/dtoCriarCategoria";
import { AtualizarCategoriaDto } from "./dto/dtoAtualizarCategoria";

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private categoriaRepository: Repository<Categoria>
  ) { }

  async create(dto: criarCategoriaDto): Promise<Categoria> {
    const categoria = await this.categoriaRepository.create({ ...dto });
    return this.categoriaRepository.save(categoria);
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findById(idCategoria: string): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({ where: { id: idCategoria } });
    if (!categoria) throw new NotFoundException("Categoria não encontrada");

    return categoria;
  }

  async listarCursos(id: string) {
    const categoria = await this.categoriaRepository.findOne({
      where: { id },
      relations: ["cursos"]
    });

    if (!categoria) throw new NotFoundException("Categoria não encontrada");

    return categoria.cursos;
  }

  async update(id: string, atualizarCategoriaDto: AtualizarCategoriaDto): Promise<Categoria> {
    const categoria = await this.findById(id);
    Object.assign(categoria, atualizarCategoriaDto);

    return this.categoriaRepository.save(categoria);
  }

  async remove(id: string): Promise<void> {
    const categoria = await this.findById(id);
    await this.categoriaRepository.remove(categoria);
  }

}