import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';
//import { CreateEspecieDto } from './dto/create-especie.dto';
//import { UpdateEspecieDto } from './dto/update-especie.dto';

@Controller('especie')
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Post('/nuevaEspecie')
  create(@Body() nuevaEspecie: string) {
    return this.especieService.createEspecie(nuevaEspecie);
  }


  @Get('/getListaEspecies')
  async getListaEspecies(): Promise<Especie[]> {
    return this.especieService.getAllEspecie();
  }

  @Get(':getIdEspecie')
  findOne(@Param('id') id: number) {
    return this.especieService.getEspecieById(id);
  }

  @Patch(':id')
  update(@Param('id') id: number,@Body() updateEspecie: Especie) {
    return this.especieService.updateEspecie(+id, updateEspecie);
  }

  @Delete(':deleteEspecie')
  remove(@Param('id') id: number) {
    return this.especieService.removeEspecie(id);
  }
}
