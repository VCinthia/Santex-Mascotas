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
import { Public } from './../auth/decorators/public.decorator';
@Controller('barrio')
export class BarrioController {
  constructor(private readonly barrioService: BarrioService) {}

  @Public()
  @Post('/nuevoBarrio')
  create(@Body() nuevoBarrio: CreateBarrioDto) {
    return this.barrioService.createBarrio(nuevoBarrio);
  }

  @Public()
  @Get('/getListaBarrios')
  async getListaBarrios(): Promise<Barrio[]> {
    return this.barrioService.getAllBarrio();
  }

  @Public()
  @Get('/getBarrioById/:id')
  findOne(@Param('id') id: number) {
    return this.barrioService.getBarrioById(id);
  }
  
  //byIdCiudad OK
  @Public()
  @Get('/getBarriosByCiudad/:idCiudad')
  find(@Param('idCiudad') idCiudad: number) {
    return this.barrioService.getBarrioByIdCiudad(idCiudad);
  }

  @Public()
  @Put('/updateBarrio/:id')
  update(@Param('id') id: number, @Body() updateBarrio: Barrio) {
    return this.barrioService.updateBarrio(+id, updateBarrio);
  }

  @Public()
  @Delete('/deleteBarrio/:id')
  remove(@Param('id') id: number) {
    return this.barrioService.removeBarrio(id);
  }
}
