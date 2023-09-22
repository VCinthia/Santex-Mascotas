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
import { Public } from './../auth/decorators/public.decorator';
@Controller('mascota')
export class MascotaController {
  constructor(private readonly mascotaService: MascotaService) {}

  @Public()
  @Post('/createMascota')
  @UseInterceptors(FileInterceptor('file'))
  createMascota(
    @UploadedFile() file: Express.Multer.File | undefined,
    @Body() createMascotaDto: MascotaDto,
  ) {
    return this.mascotaService.createMascota(file, createMascotaDto);
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
  @Get('/buscarMascotas')
  buscarMascotas(@Body() mascota: FilterMascota) {
    return this.mascotaService.buscarMascotas(mascota);
  }

  @Public()
  @Get('/getMascotaByDni/:dni')
  getMascotaByDni(@Param('dni') dni: number) {
    return this.mascotaService.getMascotaByDniUsuario(+dni);
  }
}
