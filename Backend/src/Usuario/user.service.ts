import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Usuario } from "./userEntity/user.entity";
import { Repository } from "typeorm";
import { CriarUsuarioDto } from "./dto/dtoCriarUsuario";
import { AtualizarUsuarioDto } from "./dto/dtoAtualizarUsuario";
import bcrypt from "bcrypt";

@Injectable()
export class UsuarioService {

  constructor(
    @InjectRepository(Usuario)
    private userRepository: Repository<Usuario>
  ) { }

  //Função que cria usuário e valida o email
  async create(dto: CriarUsuarioDto): Promise<Usuario> {

    const hash = await bcrypt.hash(dto.senha, 10);
    const usuario = this.userRepository.create({
      ...dto,
      senha: hash
    });
    const existe = await this.userRepository.findOne({ where: { email: dto.email } })
    if (existe) throw new ConflictException("Email ja cadastrado!");

    return this.userRepository.save(usuario);

  }

  async findAll(): Promise<Usuario[]> {
    return this.userRepository.find();
  }

  async findById(idUser: string): Promise<Usuario> {

    const usuario = await this.userRepository.findOne({ where: { id: idUser } });
    if (!usuario) throw new NotFoundException("Usuário não encontrado!");

    return usuario;

  }

  async findByEmail(email: string): Promise<Usuario> {

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) throw new NotFoundException("Usuário não encontrado!");
    return user;

  }

  async listarCursos(id: string) {
    const usuario = await this.userRepository.findOne({
      where: { id },
      relations: ["matriculas", "matriculas.curso"]
    });

    if (!usuario) throw new NotFoundException("Usuário não encontrado");

    return usuario.matriculas.map(m => m.curso);
  }

  async update(id: string, atualizarUsuarioDto: AtualizarUsuarioDto): Promise<Usuario> {

    const usuario = await this.findById(id);
    Object.assign(usuario, atualizarUsuarioDto);

    return this.userRepository.save(usuario);

  }

  async remove(id: string): Promise<void> {

    const usuario = await this.findById(id);
    await this.userRepository.remove(usuario);

  }

}