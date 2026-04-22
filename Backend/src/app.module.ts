import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/configDB';
import { ConfigModule } from '@nestjs/config';
import { UsuarioModule } from './Usuario/user.module';
import { CursoModule } from './Curso/curso.module';
import { CategoriaModule } from './Categoria/categoria.module';
import { MatriculaModule } from './Matricula/matricula.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './Roles/roles.guard';
import { CursoLoggerMiddleware } from './Log/midlawere';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    UsuarioModule,
    CursoModule,
    CategoriaModule,
    MatriculaModule,
    AuthModule
  ],
  
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CursoLoggerMiddleware)
      .forRoutes('curso');
  }
}
