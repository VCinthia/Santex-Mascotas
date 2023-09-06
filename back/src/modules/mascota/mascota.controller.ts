import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Put,
} from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaDto } from './dto/create-mascota.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Post('/createMascota')
  @UseInterceptors(FileInterceptor('file'))
  createMascota(
    @UploadedFile() file: Express.Multer.File,
    @Body() createMascotaDto: MascotaDto,
  ) {
    return this.mascotaService.createMascota(file, createMascotaDto);
  }

  @Get('/getListMascota')// agrego el estado por el que queremos filtrar, modifico función
  getListMascota(@Param('estado') estado: string) {
    return this.mascotaService.getListMascotas(estado);
  }

  @Get('/getMascotaById/:id')
  getMascotaById(@Param('id') id: string) {
    return this.mascotaService.getMascotaById(+id);
  }

  @Put('/updateMascota/:id')
  @UseInterceptors(FileInterceptor('file'))
  updateMascota(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() mascotaDto: MascotaDto,
  ) {
    return this.mascotaService.updateMascota(+id, file, mascotaDto);
  }

  @Delete('/deleteMascota/:id')
  deleteMascota(@Param('id') id: string) {
    return this.mascotaService.deleteMascotaById(+id);
  }
}
