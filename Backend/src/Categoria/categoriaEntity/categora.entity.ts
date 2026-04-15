import { Curso } from "src/Curso/cursoEntity/curso.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria{

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ unique: true })
  nome: string;

  @Column()
  descricao: string;

  @OneToMany(() => Curso, (curso) => curso.categoria, { cascade: true })
  cursos: Curso[];

}