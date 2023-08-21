import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Login } from './entities/login.entity';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions } from 'sequelize';

@Injectable()
export class LoginService {
  userNotFound = 'No existe el usuario.';
  constructor(
    @InjectModel(Login)
    private readonly loginEntity: typeof Login,
  ) {}

  public async createLogin(login: Login): Promise<Login> {
    try {
      const loginCreated = await this.loginEntity.create(login);
      if (loginCreated) {
        return loginCreated;
      } else {
        throw new HttpException(
          'El usuario no pudo crearse.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllLogin(): Promise<Login[]> {
    try {
      const loginList: Login[] = await this.loginEntity.findAll();
      if (loginList) {
        return loginList;
      } else {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getLoginById(id: string): Promise<Login> {
    try {
      const condition: FindOptions = { where: { email: id } };
      const login: Login = await this.loginEntity.findOne(condition);
      if (login) {
        return login;
      } else {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateLogin(id: string, login: Login): Promise<Login> {
    try {
      const condition: FindOptions = { where: { email: id } };
      const loginExist: Login = await this.loginEntity.findOne(condition);
      if (!loginExist) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        loginExist.setPassword(login.getPassword());
        await loginExist.save();
        return loginExist;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteLogin(id: string): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { email: id } };
      const user: Login = await this.loginEntity.findOne(condition);
      if (!user) {
        throw new HttpException(this.userNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await this.loginEntity.destroy(condition);
      }
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
