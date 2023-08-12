import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { dataBaseConfig } from './database/database.config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Module } from '@nestjs/common';
import { LoginModule } from './modules/login/login.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './middleware/response.middleware';

@Module({
  imports: [
    SequelizeModule.forRoot(dataBaseConfig),
    UsuariosModule,
    LoginModule,
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
