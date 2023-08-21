import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BarrioService } from './barrio.service';
//import { CreateBarrioDto } from './dto/create-barrio.dto';
//import { UpdateBarrioDto } from './dto/update-barrio.dto';
import { Barrio } from './entities/barrio.entity';

@Controller('barrio')
export class BarrioController {
  constructor(private readonly barrioService: BarrioService) {}

  @Post('/nuevoBarrio')
  create(@Body() nuevoBarrio: string) {
    return this.barrioService.createBarrio(nuevoBarrio);
  }

  @Get('/getListaBarrios')
  async getListaBarrios(): Promise<Barrio[]> {
    return this.barrioService.getAllBarrio();
  }

  @Get('/getBarrioById/:id')
  findOne(@Param('id') id: number) {
    return this.barrioService.getBarrioById(id);
  }

  @Patch('/updateBarrio/:id')
  update(@Param('id') id: number, @Body() updateBarrio: Barrio) {
    return this.barrioService.updateBarrio(+id, updateBarrio);
  }

  @Delete('/updateBarrio/:id')
  remove(@Param('id') id: number) {
    return this.barrioService.removeBarrio(id);
  }
}
