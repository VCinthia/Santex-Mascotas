import { Module } from '@nestjs/common';
import { EspecieService } from './especie.service';
import { EspecieController } from './especie.controller';
import { SequelizeModule } from '@nestjs/sequelize'; //ver me tira error!
import { Especie } from './entities/especie.entity';
import { Mascota } from '../mascota/entities/mascota.entity';

@Module({
  imports: [SequelizeModule.forFeature([Especie, Mascota])],
  controllers: [EspecieController],
  providers: [EspecieService],
})
export class EspecieModule {}
