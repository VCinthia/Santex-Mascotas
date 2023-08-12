import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from './entities/usuario.entity';
import { Module } from '@nestjs/common';
import { LoginService } from '../login/login.service';
import { Login } from '../login/entities/login.entity';

@Module({
  imports: [SequelizeModule.forFeature([Usuario, Login])],
  controllers: [UsuariosController],
  providers: [UsuariosService, LoginService],
})
export class UsuariosModule {}
