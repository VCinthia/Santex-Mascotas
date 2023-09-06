import { HttpExceptionFilter } from './middleware/response.middleware';
import { UsuarioModule } from './modules/usuario/usuarios.module';
import { EspecieModule } from './modules/especie/especie.module';
import { MascotaModule } from './modules/mascota/mascota.module';
import { BarrioModule } from './modules/barrio/barrio.module';
import { CiudadModule } from './modules/ciudad/ciudad.module';
import { dataBaseConfig } from './database/database.config';
import { LoginModule } from './modules/login/login.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_FILTER } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    UsuarioModule,
    LoginModule,
    BarrioModule,
    CiudadModule,
    EspecieModule,
    MascotaModule,
    AuthModule,
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
