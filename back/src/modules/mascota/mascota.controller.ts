import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
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

  @Get('/getListMascota')
  getListMascota() {
    return this.mascotaService.getListMascotas();
  }

  @Get('/getMascotaById/:id')
  getMascotaById(@Param('id') id: string) {
    return this.mascotaService.getMascotaById(+id);
  }

  @Patch('/updateMascota/:id')
  @UseInterceptors(FileInterceptor('file'))
  updateMascota(
    @Param('id') id: string,
    file: Express.Multer.File,
    @Body() mascotaDto: MascotaDto,
  ) {
    return this.mascotaService.updateMascota(+id, file, mascotaDto);
  }

  @Delete('/deleteMascota/:id')
  deleteMascota(@Param('id') id: string) {
    return this.mascotaService.deleteMascotaById(+id);
  }
}
