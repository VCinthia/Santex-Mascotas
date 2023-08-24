import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { Login } from './entities/login.entity';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  //TODO REVER CONTROLADOR
  @Get('/getListaLogin')
  async getListaLogin(): Promise<Login[]> {
    return this.loginService.getAllLogin();
  }

  @Get('/getLoginById/:id')
  async getLoginById(@Param('id') id: string): Promise<Login> {
    console.log(id);
    return this.loginService.getLoginById(id);
  }
  @Post()
  createLogin(@Body() createUserDto: Login) {
    return this.loginService.createLogin(createUserDto);
  }
  @Put('/updateLogin/:id')
  updateLogin(@Param('id') id: string, @Body() newLogin: Login) {
    return this.loginService.updateLogin(id, newLogin);
  }

  @Delete('deleteLogin/:id')
  deleteLogin(@Param('id') id: string) {
    return this.loginService.deleteLogin(id);
  }
}
