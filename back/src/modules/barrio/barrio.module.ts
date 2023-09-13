import { Module } from '@nestjs/common';
import { BarrioService } from './barrio.service';
import { BarrioController } from './barrio.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Barrio } from './entities/barrio.entity';
import { Mascota } from '../mascota/entities/mascota.entity';

@Module({
  imports: [SequelizeModule.forFeature([Barrio, Mascota])],
  controllers: [BarrioController],
  providers: [BarrioService],
})
export class BarrioModule {}
