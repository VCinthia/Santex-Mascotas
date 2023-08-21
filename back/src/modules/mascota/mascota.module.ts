import { Module } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { MascotaController } from './mascota.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Usuario } from '../usuario/entities/usuario.entity';
import { Mascota } from './entities/mascota.entity';
import { Especie } from '../especie/entities/especie.entity';
import { Barrio } from '../barrio/entities/barrio.entity';
@Module({
  imports: [SequelizeModule.forFeature([Mascota, Especie, Usuario, Barrio])],
  controllers: [MascotaController],
  providers: [MascotaService],
})
export class MascotaModule {}
