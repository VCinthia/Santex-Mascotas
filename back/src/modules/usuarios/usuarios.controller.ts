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
  create(@Body() usuarioData: UsuarioDTO) {
    return this.usuariosService.createUsuario(usuarioData);
  }

  @Get('/getListaUsuarios')
  public async getListaUsuarios(): Promise<Usuario[]> {
    return this.usuariosService.getListaUsuarios();
  }

  @Get('/getUsuario/:id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.getUserById(id);
  }

  @Put('/updateUsuario/:id')
  updateUsuario(@Param('id') id: string, @Body() updateUsuarioDto: UsuarioDTO) {
    return this.usuariosService.updateUsuario(id, updateUsuarioDto);
  }

  @Delete('/deleteUsuario/:id')
  deleteUsuario(@Param('id') id: string) {
    return this.usuariosService.deleteUsuario(id);
  }
}
