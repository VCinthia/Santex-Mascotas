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
  UseGuards,
} from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaDto } from './dto/create-mascota.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtAuthGuard } from '../auth/jwt/auth.guard';
import { FilterMascota } from './dto/filterMascota.dto';
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

  @UseGuards(JwtAuthGuard)
  @Put('/updateMascota/:id')
  @UseInterceptors(FileInterceptor('file'))
  updateMascota(
    @UploadedFile() file: Express.Multer.File,
    @Param('id') id: string,
    @Body() mascotaDto: MascotaDto,
  ) {
    return this.mascotaService.updateMascota(+id, file, mascotaDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/deleteMascota/:id')
  deleteMascota(@Param('id') id: string) {
    return this.mascotaService.deleteMascotaById(+id);
  }

  @Get('/buscarMascotas')
  buscarMascotas(@Body() mascota: FilterMascota) {
    return this.mascotaService.buscarMascotas(mascota);
  }
}
