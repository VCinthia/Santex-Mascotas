import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Especie } from './entities/especie.entity';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions } from 'sequelize';
//import { CreateEspecieDto } from './dto/create-especie.dto';
//import { UpdateEspecieDto } from './dto/update-especie.dto';

@Injectable()
export class EspecieService {
  especieNotFound = 'No existe la especie.';
  constructor(
    @InjectModel(Especie)
    private readonly especieEntity: typeof Especie,
  ) {}

  public async getEspecieById(id: number): Promise<Especie> {
    try {
      const condition: FindOptions = { where: { idEspecie: id } };
      const especie: Especie = await this.especieEntity.findOne(condition);
      if (especie) {
        return especie;
      } else {
        throw new HttpException(this.especieNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async createEspecie(nombreEspecie: string): Promise<Especie> {
    try {
      const condition: FindOptions = { where: { especie: nombreEspecie } };
      const especieExist: Especie = await this.especieEntity.findOne(condition);

      if (!especieExist) {
        const especieCreated = await this.especieEntity.create({
          especie: nombreEspecie,
        });

        if (especieCreated) {
          return especieCreated;
        } else {
          throw new HttpException(
            'La especie no pudo crearse.',
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        throw new HttpException(
          'La especie ya se encuentra registrada.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllEspecie(): Promise<Especie[]> {
    try {
      const especieList: Especie[] = await this.especieEntity.findAll();
      if (especieList) {
        return especieList;
      } else {
        throw new HttpException(this.especieNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateEspecie(
    id: number,
    updateEspecie: Especie,
  ): Promise<Especie> {
    try {
      const condition: FindOptions = { where: { idEspecie: id } };
      const especieExist: Especie = await this.especieEntity.findOne(condition);
      if (!especieExist) {
        throw new HttpException(this.especieNotFound, HttpStatus.BAD_REQUEST);
      } else {
        especieExist.setEspecie(updateEspecie.especie);
        especieExist.setUpdateAt(new Date());
        await especieExist.save();
        return especieExist;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeEspecie(id: number): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idEspecie: id } };
      const especie: Especie = await this.especieEntity.findOne(condition);
      if (!especie) {
        throw new HttpException(this.especieNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await this.especieEntity.destroy(condition);
      }
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
