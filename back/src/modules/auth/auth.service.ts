import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { Usuario } from '../usuario/entities/usuario.entity';
import { FindOptions } from 'sequelize';
import { Login } from '../login/entities/login.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Usuario)
    private readonly userModel: typeof Usuario,
    @InjectModel(Login)
    private readonly loginModel: typeof Login,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string) {
    const user = await this.validateUser(email, pass);
    const payload = { user };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async validateUser(email: string, pass: string): Promise<Usuario> {
    const condition: FindOptions = {
      where: { userEmail: email },
    };
    const user = await this.userModel.findOne(condition);
    if (!user) {
      throw new UnauthorizedException('El usuario no existe');
    }
    if (pass) {
      const conditionLog: FindOptions = {
        where: { email: email },
      };
      const login = await this.loginModel.findOne(conditionLog);
      const validatePass = await bcrypt.compare(pass, login.getPassword());
      if (!validatePass) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }
    }
    return user;
  }
}
