import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { Usuario } from '../usuario/entities/usuario.entity';
import { FindOptions } from 'sequelize';
import { Login } from '../login/entities/login.entity';
import * as bcrypt from 'bcrypt';
import { UsuarioLoginDTO } from '../usuario/usuarioDTO/usuarioLogin.dto';

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

  async validateUser(email: string, pass: string): Promise<UsuarioLoginDTO> {
    const userNotFound = 'El usuario no existe';
    const condition: FindOptions = {
      where: { email: email },
    };
    const userLogin = await this.loginModel.findOne(condition);
    if (!userLogin) {
      throw new UnauthorizedException(userNotFound);
    }
    const conditionLog: FindOptions = {
      where: { idLogin: userLogin.getIdLogin() },
    };
    const user = await this.userModel.findOne(conditionLog);
    if (!user.getActivo()) {
      throw new UnauthorizedException(userNotFound);
    }
    if (pass) {
      const validatePass = await bcrypt.compare(pass, userLogin.getPassword());
      if (!validatePass) {
        throw new UnauthorizedException('Contraseña incorrecta');
      }
    }

    const usuarioLogin: UsuarioLoginDTO = new UsuarioLoginDTO();
    usuarioLogin.idUsuario = user.getIdUsuario();
    usuarioLogin.dniPersona = user.getDniPersona();
    usuarioLogin.apellido = user.getApellido();
    usuarioLogin.email = email;
    usuarioLogin.nombre = user.getNombre();
    usuarioLogin.telefono = user.getTelefono();
    usuarioLogin.activo = user.getActivo();
    return usuarioLogin;
  }
}
