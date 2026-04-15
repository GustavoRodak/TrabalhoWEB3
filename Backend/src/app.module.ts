import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/configDB';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './Usuario/user.module';
import { CursoModule } from './Curso/curso.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { MatriculaModule } from './Matricula/matricula.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsuarioModule,
    CursoModule,
    CategoriaModule,
    MatriculaModule,
    
  ],
})
export class AppModule {}
