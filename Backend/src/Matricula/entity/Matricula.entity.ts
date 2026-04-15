import { Curso } from "src/Curso/cursoEntity/curso.entity";
import { Usuario } from "src/Usuario/userEntity/user.entity";
import { CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["usuario","curso"])
export class Matricula{

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Usuario, u => u.matriculas, { onDelete:"CASCADE" })
  usuario: Usuario;

  @ManyToOne(() => Curso, c => c.matriculas, { onDelete:"CASCADE" })
  curso: Curso;

  @CreateDateColumn()
  dataMatricula: Date;
}
