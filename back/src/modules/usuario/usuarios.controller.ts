import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './entities/usuario.entity';
import { UsuarioDTO } from './usuarioDTO/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('/createUsuario')
  createUsuario(@Body() usuarioData: UsuarioDTO) {
    return this.usuariosService.createUsuario(usuarioData);
  }

  @Get('/getListaUsuarios')
  public async getListaUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.getListaUsuarios();
  }

  @Get('/getUsuario/:id')
  getUserById(@Param('id') id:number) {
    return this.usuariosService.getUserById(id);
  }

  @Put('/updateUsuario/:id')
  updateUsuario(@Param('id') id: number, @Body() updateUsuarioDto: UsuarioDTO) {
    return this.usuariosService.updateUsuario(id, updateUsuarioDto);
  }

  @Delete('/deleteUsuario/:id')
  deleteUsuario(@Param('id') id: number) {
    return this.usuariosService.deleteUsuario(id);
  }
}
