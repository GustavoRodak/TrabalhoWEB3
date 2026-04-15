import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class LogAcesso {

  @PrimaryGeneratedColumn('uuid')
  id: number;

  @CreateDateColumn()
  dataHora: Date;

  @Column()
  metodo: string;

  @Column()
  rota: string;
}