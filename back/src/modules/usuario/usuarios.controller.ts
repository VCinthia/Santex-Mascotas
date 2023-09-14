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
import { Public } from './../auth/decorators/public.decorator';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Public()
  @Post('/createUsuario')
  createUsuario(@Body() usuarioData: UsuarioDTO) {
    return this.usuariosService.createUsuario(usuarioData);
  }

  @Public()
  @Get('/getUsuario/:dni')
  getUserById(@Param('dni') dni: number) {
    console.log(dni);
    return this.usuariosService.getUserByDNI(dni);
  }

  @Public()
  @Put('/updateUsuario/:id')
  updateUsuario(@Param('id') id: number, @Body() updateUsuarioDto: UsuarioDTO) {
    return this.usuariosService.updateUsuario(id, updateUsuarioDto);
  }

  @Public()
  @Delete('/deleteUsuario/:id')
  deleteUsuario(@Param('id') id: number) {
    return this.usuariosService.deleteUsuario(id);
  }
}
