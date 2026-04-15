import { TipoAcesso } from "src/Enum/TipoAcesso";
import { Matricula } from "src/Matricula/entity/Matricula.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario{

  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  nome: string;

  @Column({unique: true})
  email: string;

  @Column()
  tipoAcesso: TipoAcesso;

  @OneToMany(() => Matricula, m => m.usuario)
  matriculas: Matricula[];

}