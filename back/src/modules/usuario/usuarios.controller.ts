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
import { UsuarioDTO } from './usuarioDTO/usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post('/createUsuario')
  createUsuario(@Body() usuarioData: UsuarioDTO) {
    return this.usuariosService.createUsuario(usuarioData);
  }

  @Get('/getUsuario/:id')
  getUserById(@Param('id') id: number) {
    return this.usuariosService.getUserByDNI(id);
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
