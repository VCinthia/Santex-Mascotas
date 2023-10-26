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
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaDto } from './dto/create-mascota.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { FilterMascota } from './dto/filterMascota.dto';
import { Public } from './../auth/decorators/public.decorator';
@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Public()
  @Post('/createMascota')
  @UseInterceptors(FileInterceptor('file'))
  async createMascota(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body() createMascotaDto: MascotaDto,
  ) {
    try {
      if (!createMascotaDto.idUsuario) {
        throw new HttpException(
          'El campo idUsuario es requerido',
          HttpStatus.BAD_REQUEST,
        );
      }
      const newMascota = await this.mascotaService.createMascota(
        file,
        createMascotaDto,
      );
      return newMascota;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Public()
  @Get('/getListMascota')
  getListMascota() {
    return this.mascotaService.getListMascotas();
  }

  @Public()
  @Get('/getMascotaById/:id')
  getMascotaById(@Param('id') id: string) {
    return this.mascotaService.getMascotaById(+id);
  }

  @Public()
  @Put('/updateMascota/:id')
  @UseInterceptors(FileInterceptor('file'))
  updateMascota(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Param('id') id: string,
    @Body() mascotaDto: MascotaDto,
  ) {
    return this.mascotaService.updateMascota(+id, file, mascotaDto);
  }

  @Public()
  @Delete('/deleteMascota/:id')
  deleteMascota(@Param('id') id: string) {
    return this.mascotaService.deleteMascotaById(+id);
  }

  @Public()
  // @Get('/buscarMascotas')
  @Post('/buscarMascotas')
  buscarMascotas(@Body() mascota: FilterMascota) {
    return this.mascotaService.buscarMascotas(mascota);
  }

  @Public()
  @Get('/getMascotaByDni/:dni')
  getMascotaByDni(@Param('dni') dni: number) {
    return this.mascotaService.getMascotaByDniUsuario(+dni);
  }

  @Public()
  @Post('/updateVisibilidadMascota/:id/:estado')
  updateVisibilidad(@Param('id') id: string, @Param('estado') estado: string) {
    return this.mascotaService.updateVisibilidadMascota(+id, estado);
  }
}
