import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Ciudad } from './entities/ciudad.entity';
//import { CreateCiudadDto } from './dto/create-ciudad.dto';
//import { UpdateCiudadDto } from './dto/update-ciudad.dto';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions } from 'sequelize';

@Injectable()
export class CiudadService {
  ciudadNotFound = 'No existe la ciudad.';
  constructor(
    @InjectModel(Ciudad)
    private readonly ciudadEntity: typeof Ciudad,
  ) {}

  public async getCiudadById(id: number): Promise<Ciudad> {
    try {
      const condition: FindOptions = { where: { idCiudad: id } };
      const ciudad: Ciudad = await this.ciudadEntity.findOne(condition);
      if (ciudad) {
        return ciudad;
      } else {
        throw new HttpException(this.ciudadNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async createCiudad(nombreCiudad: string): Promise<Ciudad> {
    try {
      const condition: FindOptions = { where: { nombre: nombreCiudad } };
      const ciudadExist: Ciudad = await this.ciudadEntity.findOne(condition);

      if (!ciudadExist) {
        const ciudadCreated = await this.ciudadEntity.create(nombreCiudad);

        if (ciudadCreated) {
          return ciudadCreated;
        } else {
          throw new HttpException(
            'La ciudad no pudo crearse.',
            HttpStatus.BAD_REQUEST,
          );
        }
      } else {
        throw new HttpException(
          'La ciudad ya se encuentra registrado.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getAllCiudad(): Promise<Ciudad[]> {
    try {
      const ciudadList: Ciudad[] = await this.ciudadEntity.findAll();
      if (ciudadList) {
        return ciudadList;
      } else {
        throw new HttpException(this.ciudadNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  //Ver como a afectaria al codigo del barrio
  public async updateCiudad(id: number, updateCiudad: Ciudad): Promise<Ciudad> {
    try {
      const condition: FindOptions = { where: { idCiudad: id } };
      const ciudadExist: Ciudad = await this.ciudadEntity.findOne(condition);
      if (!ciudadExist) {
        throw new HttpException(this.ciudadNotFound, HttpStatus.BAD_REQUEST);
      } else {
        ciudadExist.setNombre(updateCiudad.nombre);
        await ciudadExist.save();
        return ciudadExist;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeCiudad(id: number): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idCiudad: id } };
      const ciudad: Ciudad = await this.ciudadEntity.findOne(condition);
      if (!ciudad) {
        throw new HttpException(this.ciudadNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await this.ciudadEntity.destroy(condition);
      }
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
