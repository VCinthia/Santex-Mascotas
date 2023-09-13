import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { EspecieService } from './especie.service';
import { Especie } from './entities/especie.entity';
import { JwtAuthGuard } from '../auth/jwt/auth.guard';

@Controller('especie')
export class EspecieController {
  constructor(private readonly especieService: EspecieService) {}

  @Post('/nuevaEspecie/:nuevaEspecie')
  create(@Param('nuevaEspecie') nuevaEspecie: string) {
    return this.especieService.createEspecie(nuevaEspecie);
  }

  @Get('/getListaEspecies')
  async getListaEspecies(): Promise<Especie[]> {
    return this.especieService.getAllEspecie();
  }

  @Get('/getEspecieById/:id')
  findOne(@Param('id') id: number) {
    return this.especieService.getEspecieById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Put('/updateEspecie/:id')
  update(@Param('id') id: number, @Body() updateEspecie: Especie) {
    return this.especieService.updateEspecie(+id, updateEspecie);
  }
  @UseGuards(JwtAuthGuard)
  @Delete('/deleteEspecie/:id')
  remove(@Param('id') id: number) {
    return this.especieService.removeEspecie(id);
  }
}