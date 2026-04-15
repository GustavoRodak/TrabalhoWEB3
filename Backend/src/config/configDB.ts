import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'sqlite',
  database: 'src/database/database.sqlite',

  entities: [__dirname + '/../**/*.entity{.ts,.js}'],

  synchronize: true, // apenas desenvolvimento
  logging: true
};