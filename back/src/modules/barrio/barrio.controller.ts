import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { BarrioService } from './barrio.service';
import { Barrio } from './entities/barrio.entity';
import { CreateBarrioDto } from './dto/create-barrio.dto';

@Controller('barrio')
export class BarrioController {
  constructor(private readonly barrioService: BarrioService) {}

  @Post('/nuevoBarrio')
  create(@Body() nuevoBarrio: CreateBarrioDto) {
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

  @Put('/updateBarrio/:id')
  update(@Param('id') id: number, @Body() updateBarrio: Barrio) {
    return this.barrioService.updateBarrio(+id, updateBarrio);
  }

  @Delete('/deleteBarrio/:id')
  remove(@Param('id') id: number) {
    return this.barrioService.removeBarrio(id);
  }
}
