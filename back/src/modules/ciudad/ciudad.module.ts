import { Module } from '@nestjs/common';
import { CiudadService } from './ciudad.service';
import { CiudadController } from './ciudad.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Ciudad } from './entities/ciudad.entity';
import { Barrio } from '../barrio/entities/barrio.entity';

@Module({
  imports: [SequelizeModule.forFeature([Ciudad, Barrio])],
  controllers: [CiudadController],
  providers: [CiudadService],
})
export class CiudadModule {}
