import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';
import { Public } from './../auth/decorators/public.decorator';
@Controller('especie')
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Public()
  @Post('/nuevaEspecie/:nuevaEspecie')
  create(@Param('nuevaEspecie') nuevaEspecie: string) {
    return this.especieService.createEspecie(nuevaEspecie);
  }

  @Public()
  @Get('/getListaEspecies')
  async getListaEspecies(): Promise<Especie[]> {
    return this.especieService.getAllEspecie();
  }

  @Public()
  @Get('/getEspecieById/:id')
  findOne(@Param('id') id: number) {
    return this.especieService.getEspecieById(id);
  }

  @Public()
  @Put('/updateEspecie/:id')
  update(@Param('id') id: number, @Body() updateEspecie: Especie) {
    return this.especieService.updateEspecie(+id, updateEspecie);
  }

  @Public()
  @Delete('/deleteEspecie/:id')
  remove(@Param('id') id: number) {
    return this.especieService.removeEspecie(id);
  }
}
