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
        if (usuario && usuario.getActivo()) {
          throw new HttpException(
            `El usuario con dni ${usuarioDTO.dniPersona} se encuentra registrado.`,
            HttpStatus.BAD_REQUEST,
          );
        }
        const loginExist = await this.loginService.getLoginByEmail(
          usuarioDTO.user.email,
        );
        if (loginExist) {
          const condition: FindOptions = {
            where: { idLogin: loginExist.getIdLogin() },
          };
          const usuarioAux = await this.userModel.findOne(condition);
          if (usuarioAux && usuarioAux.getActivo()) {
            throw new HttpException(
              `El usuario con el email ${usuarioDTO.user.email} se encuentra registrado.`,
              HttpStatus.BAD_REQUEST,
            );
          }
        }
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
            usuarioDTO.respuesta,
            loginCreate.getIdLogin(),
          );
          const newUsuario = await this.userModel.create(usuario);
          return newUsuario;
        }
        throw new HttpException(
          'No se puedo crear al usuario.',
          HttpStatus.BAD_REQUEST,
        );
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
        const usuarioLogin: UsuarioLoginDTO = new UsuarioLoginDTO();
        usuarioLogin.idUsuario = persona.getIdUsuario();
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
        this.loginService.updateLogin(usuario.getIdLogin(), userLogin);
        usuario.setDniPersona(personaDTO.dniPersona);
        usuario.setNombre(personaDTO.nombre);
        usuario.setApellido(personaDTO.apellido);
        usuario.setTelefono(personaDTO.telefono);
        usuario.setRespuesta(personaDTO.respuesta.toUpperCase());
        usuario.setUpdateAt(new Date());
        await usuario.save();
      }
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

  public async updatePassword(id: number, password: string): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idUsuario: id } };
      const usuario: Usuario = await this.userModel.findOne(condition);
      if (!usuario) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await this.loginService.updatePassword(usuario.getIdLogin(), password);
        return true;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async comprobarRespuestas(
    id: number,
    respuesta: string,
  ): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idUsuario: id } };
      const usuario: Usuario = await this.userModel.findOne(condition);
      if (!usuario) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        if (usuario.getRespuesta().toLowerCase() === respuesta.toLowerCase()) {
          return true;
        }
        return false;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
