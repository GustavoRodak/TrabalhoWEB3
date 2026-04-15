import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Matricula } from "./entity/Matricula.entity";
import { Repository } from "typeorm";
import { CriarMatriculaDto } from "./dto/CriarMatriculaDto";

@Injectable()
export class MatriculaService{

  constructor(
    @InjectRepository(Matricula)
    private matriculaRepository: Repository<Matricula>
  ){}

  async create(dto: CriarMatriculaDto): Promise<Matricula>{
    const matricula = this.matriculaRepository.create({...dto});
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