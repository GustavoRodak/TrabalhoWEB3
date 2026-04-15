import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Matricula } from "./entity/Matricula.entity";
import { MatriculaController } from "./matricula.controller";
import { MatriculaService } from "./matricula.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Matricula])
  ],
  controllers: [MatriculaController],
  providers: [MatriculaService],
  exports: [MatriculaService]
})
export class MatriculaModule{}