import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions } from 'sequelize';
import { UsuarioDTO } from './usuarioDTO/usuario.dto';
import { UsuarioEntity } from './entities/usuario.class';
import { LoginService } from '../login/login.service';
import { LoginEntity } from '../login/entities/login.class';
import { UsuarioLoginDTO } from './usuarioDTO/usuarioLogin.dto';

@Injectable()
export class UsuariosService {
  userNotFound = 'No existe el usuario.';
  constructor(
    @InjectModel(Usuario)
    private readonly userModel: typeof Usuario,
    private readonly loginService: LoginService,
  ) {}

  public async createUsuario(usuarioDTO: UsuarioDTO): Promise<Usuario> {
    try {
      if (usuarioDTO) {
        const condition: FindOptions = {
          where: { dniPersona: usuarioDTO.dniPersona },
        };
        const usuario = await this.userModel.findOne(condition);
        const login = await this.loginService.getLoginById(
          usuario.getIdLogin(),
        );
        if (
          usuario &&
          usuario.getActivo() &&
          login.getEmail() == usuarioDTO.user.email
        ) {
          throw new HttpException(
            `El usuario con dni ${usuarioDTO.dniPersona} y email ${usuarioDTO.user.email} ya se encuentra registrado.`,
            HttpStatus.BAD_REQUEST,
          );
        } else {
          const passwordHash = await this.loginService.hashPassword(
            usuarioDTO.user.password,
          );
          const login: LoginEntity = new LoginEntity(
            usuarioDTO.user.email,
            passwordHash,
          );
          const loginCreate = await this.loginService.createLogin(login);
          if (loginCreate) {
            const usuario: UsuarioEntity = new UsuarioEntity(
              usuarioDTO.dniPersona,
              usuarioDTO.nombre,
              usuarioDTO.apellido,
              usuarioDTO.telefono,
              true,
              loginCreate.getIdLogin(),
            );
            const newUsuario = await this.userModel.create(usuario);
            return newUsuario;
          }
          throw new HttpException(
            'No se puedo crear al usuario.',
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        throw new HttpException(
          'Los datos para crear al usuario no son válidos.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserByDNI(dni: number): Promise<UsuarioLoginDTO> {
    try {
      const condition: FindOptions = {
        where: { dniPersona: dni },
      };
      const persona: Usuario = await this.userModel.findOne(condition);
      if (persona) {
        if (!persona.getActivo()) {
          throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
        }
        const login = await this.loginService.getLoginById(
          persona.getIdLogin(),
        );
        let usuarioLogin: UsuarioLoginDTO;
        usuarioLogin.id = persona.getIdUsuario();
        usuarioLogin.dniPersona = persona.getDniPersona();
        usuarioLogin.apellido = persona.getApellido();
        usuarioLogin.email = login.getEmail();
        usuarioLogin.nombre = persona.getNombre();
        usuarioLogin.telefono = persona.getTelefono();
        usuarioLogin.activo = persona.getActivo();
        return usuarioLogin;
      } else {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateUsuario(
    id: number,
    personaDTO: UsuarioDTO,
  ): Promise<Usuario> {
    try {
      const condition: FindOptions = { where: { idUsuario: id } };
      const usuario: Usuario = await this.userModel.findOne(condition);
      if (!usuario) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        const userLogin: LoginEntity = new LoginEntity(
          personaDTO.user.email,
          personaDTO.user.password,
        );
        this.loginService.updateLogin(userLogin);
        usuario.setNombre(personaDTO.nombre);
        usuario.setApellido(personaDTO.apellido);
        usuario.setTelefono(personaDTO.telefono);
        usuario.setUpdateAt(new Date());
      }
      await usuario.save();
      return usuario;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteUsuario(id: number): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idUsuario: id } };
      const persona: Usuario = await this.userModel.findOne(condition);
      if (!persona) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        persona.setActivo(false);
        await persona.save();
        return true;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
