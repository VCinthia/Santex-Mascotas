import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { Ciudad } from './entities/ciudad.entity';
import { Public } from './../auth/decorators/public.decorator';
@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Public()
  @Post('/nuevaCiudad/:nombre')
  create(@Param('nombre') nuevaCiudad: string) {
    return this.ciudadService.createCiudad(nuevaCiudad);
  }

  @Public()
  @Get('/getListaCiudades')
  async getListaciudades(): Promise<Ciudad[]> {
    return this.ciudadService.getAllCiudad();
  }

  @Public()
  @Get('/getCiudadById/:id')
  findOne(@Param('id') id: number) {
    return this.ciudadService.getCiudadById(id);
  }

  @Public()
  @Put('/updateCiudad/:id')
  update(@Param('id') id: number, @Body() updateCiudad: Ciudad) {
    return this.ciudadService.updateCiudad(+id, updateCiudad);
  }

  @Public()
  @Delete('/deleteCiudad/:id')
  remove(@Param('id') id: number) {
    return this.ciudadService.removeCiudad(id);
  }
}
