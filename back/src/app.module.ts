import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { LoginModule } from './modules/login/login.module';
import { BarrioModule } from './modules/barrio/barrio.module';
import { CiudadModule } from './modules/ciudad/ciudad.module';
import { EspecieModule } from './modules/especie/especie.module';
import { MascotaModule } from './modules/mascota/mascota.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './middleware/response.middleware';
// ver de agregar el resto de las entidades


@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    UsuariosModule,
    LoginModule,
    BarrioModule,
    CiudadModule,
    EspecieModule,
    MascotaModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
