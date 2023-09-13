import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { JwtAuthGuard } from './jwt/auth.guard';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Login } from '../login/entities/login.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    SequelizeModule.forFeature([Usuario, Login]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    JwtStrategy,
  ],
  controllers: [AuthController],
})
export class AuthModule {}
