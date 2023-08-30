import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions } from 'sequelize';
import { UsuarioDTO } from './usuarioDTO/usuario.dto';
import { UsuarioEntity } from './entities/usuario.class';
import { LoginService } from '../login/login.service';
import { LoginEntity } from '../login/entities/login.class';

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
        if (!usuario) {
          const passwordHash = await this.loginService.hashPassword(
            usuarioDTO.user.password,
          );
          const login: LoginEntity = new LoginEntity(
            usuarioDTO.user.email,
            passwordHash,
          );
          const loginCreate = this.loginService.createLogin(login);
          if (loginCreate) {
            const usuario: UsuarioEntity = new UsuarioEntity(
              usuarioDTO.dniPersona,
              usuarioDTO.nombre,
              usuarioDTO.apellido,
              usuarioDTO.telefono,
              usuarioDTO.user.email,
            );
            const newUsuario = await this.userModel.create(usuario);
            return newUsuario;
          }
          throw new HttpException(
            'No se puedo crear al usuario.',
            HttpStatus.BAD_REQUEST,
          );
        }
        throw new HttpException(
          'El usuario ya se encuentra registrado.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          'Los datos para crear la persona no son válidos.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getListaUsuarios(): Promise<Usuario[]> {
    try {
      const usuarios: Usuario[] = await this.userModel.findAll();
      if (usuarios) {
        return usuarios;
      } else {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getUserById(id: string): Promise<Usuario> {
    try {
      const condition: FindOptions = { where: { dniPersona: id } };
      const persona: Usuario = await this.userModel.findOne(condition);

      if (persona) {
        return persona;
      } else {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateUsuario(
    id: string,
    personaDTO: UsuarioDTO,
  ): Promise<Usuario> {
    try {
      const condition: FindOptions = { where: { dniPersona: id } };
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

  public async deleteUsuario(id: string): Promise<boolean> {
    try {
      //TODO delete login
      const condition: FindOptions = { where: { dniPersona: id } };
      const persona: Usuario = await this.userModel.findOne(condition);
      if (!persona) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await persona.destroy(condition);
      }
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
