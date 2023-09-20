import { SequelizeModuleOptions } from '@nestjs/sequelize';
export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: './src/database/mascotasDB.sqlite3',
  autoLoadModels: true,
  synchronize: false, //TODO pasar a false
};
