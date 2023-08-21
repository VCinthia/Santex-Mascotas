import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { mascotaDto } from './dto/create-mascota.dto';

@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post('/createMascota')
  createMascota(@Body() createMascotaDto: mascotaDto) {
    return this.mascotaService.createMascota(createMascotaDto);
  }

  @Get('/getListMascota')
  getListMascota() {
    return this.mascotaService.getListMascotas();
  }

  @Get('/getMascotaById/:id')
  getMascotaById(@Param('id') id: string) {
    return this.mascotaService.getMascotaById(+id);
  }

  @Patch('/updateMascota/:id')
  updateMascota(@Param('id') id: string, @Body() mascotaDto: mascotaDto) {
    return this.mascotaService.updateMascota(+id, mascotaDto);
  }

  @Delete('/deleteMascota/:id')
  deleteMascota(@Param('id') id: string) {
    return this.mascotaService.deleteMascotaById(+id);
  }
}
