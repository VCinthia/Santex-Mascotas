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

@Controller('ciudad')
export class CiudadController {
  constructor(private readonly ciudadService: CiudadService) {}

  @Post('/nuevaCiudad/:nombre')
  create(@Param('nombre') nuevaCiudad: string) {
    return this.ciudadService.createCiudad(nuevaCiudad);
  }

  @Get('/getListaCiudades')
  async getListaciudades(): Promise<Ciudad[]> {
    return this.ciudadService.getAllCiudad();
  }

  @Get('/getCiudadById/:id')
  findOne(@Param('id') id: number) {
    return this.ciudadService.getCiudadById(id);
  }

  @Put('/updateCiudad/:id')
  update(@Param('id') id: number, @Body() updateCiudad: Ciudad) {
    return this.ciudadService.updateCiudad(+id, updateCiudad);
  }

  @Delete('/deleteCiudad/:id')
  remove(@Param('id') id: number) {
    return this.ciudadService.removeCiudad(id);
  }
}
