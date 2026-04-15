import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoria } from "./categoriaEntity/categora.entity";
import { CategoriaController } from "./categoria.controller";
import { CategoriaService } from "./categoria.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([Categoria])
  ],
  controllers: [CategoriaController],
  providers: [CategoriaService],
  exports: [CategoriaService]
})
export class CategoriaModule{}