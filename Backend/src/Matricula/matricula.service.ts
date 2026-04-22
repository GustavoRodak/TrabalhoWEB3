import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Matricula } from "./entity/Matricula.entity";
import { Repository } from "typeorm";
import { CriarMatriculaDto } from "./dto/CriarMatriculaDto";
import { UsuarioService } from "src/Usuario/user.service";
import { CursoService } from "src/Curso/curso.service";

@Injectable()
export class MatriculaService{

  constructor(
    @InjectRepository(Matricula)
    private matriculaRepository: Repository<Matricula>,
    private usuarioService: UsuarioService,
    private cursoService: CursoService
  ){}

  async create(dto: CriarMatriculaDto){

  const usuario = await this.usuarioService.findById(dto.usuarioId);
  const curso = await this.cursoService.findById(dto.cursoId);

  const existe = await this.matriculaRepository.findOne({
    where:{ usuario:{id:dto.usuarioId}, curso:{id:dto.cursoId} },
    relations:['usuario','curso']
  });

  if(existe) throw new ConflictException("Aluno já matriculado");

  const matricula = this.matriculaRepository.create({
    usuario,
    curso
  });

  return this.matriculaRepository.save(matricula);
}

  async findAll(): Promise<Matricula[]>{
    return this.matriculaRepository.find();
  }

  async findById(idMatricula: string): Promise<Matricula>{
    const matricula = await this.matriculaRepository.findOne({where: {id: idMatricula}});
    if(!matricula) throw new NotFoundException("Matricula não encontrada");

    return matricula;
  }

  async remove(id: string): Promise<void>{
    const matricula = await this.findById(id);
    await this.matriculaRepository.remove(matricula);
  }
  

}