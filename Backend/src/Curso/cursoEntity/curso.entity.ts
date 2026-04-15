import { Categoria } from "src/Categoria/categoriaEntity/categora.entity";
import { Matricula } from "src/Matricula/entity/Matricula.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, Unique } from "typeorm";

@Entity()
@Unique(["titulo","categoria"])
export class Curso{

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  titulo: string;

  @Column()
  descricao: string;

  @Column()
  cargaHoraria: number;

  @ManyToOne(() => Categoria, c => c.cursos, { onDelete:"CASCADE" })
  categoria: Categoria;

  @OneToMany(() => Matricula, m => m.curso, { cascade:true })
  matriculas: Matricula[];

}