import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Curso } from "./cursoEntity/curso.entity";
import { Repository } from "typeorm";
import { CriarCursoDto } from "./dto/dtoCriarCurso";
import { AtualizarCursoDto } from "./dto/dtoAtualizarCurso";

@Injectable()
export class CursoService{

  constructor(
    @InjectRepository(Curso)
    private cursoRepository: Repository<Curso>
  ) {}

  async create(dto: CriarCursoDto): Promise<Curso>{
      const curso = this.cursoRepository.create({...dto});
      return this.cursoRepository.save(curso);
  }

  async findAll(): Promise<Curso[]>{
    return this.cursoRepository.find();
  }

  async findById(idCurso: string): Promise<Curso>{
    const curso = await this.cursoRepository.findOne({where: {id: idCurso}});
    if(!curso) throw new NotFoundException("Curso não encontrado");

    return curso;
  }

  async update(id: string, atualizarCursoDto: AtualizarCursoDto): Promise<Curso>{
    const curso = await this.findById(id);
    Object.assign(curso, atualizarCursoDto);

    return this.cursoRepository.save(curso);
  }

  async remove(id: string): Promise<void>{
    const curso = await this.findById(id);
    await this.cursoRepository.remove(curso);
  }


}