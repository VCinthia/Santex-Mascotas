import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Barrio } from './entities/barrio.entity';
//import { CreateBarrioDto } from './dto/create-barrio.dto';
//import { UpdateBarrioDto } from './dto/update-barrio.dto';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { FindOptions} from 'sequelize';

@Injectable()
export class BarrioService {
  barrioNotFound = 'No existe el barrio.';
  constructor(
    @InjectModel(Barrio)
    private readonly barrioEntity: typeof Barrio,
  ) {}

  public async getBarrioById(id: number): Promise<Barrio> {
    try {
      const condition: FindOptions = { where: { idBarrio: id } };
      const barrio: Barrio = await this.barrioEntity.findOne(condition);
      if (barrio) {
        return barrio;
      } else {
        throw new HttpException(this.barrioNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
 
  public async createBarrio (nombreBarrio: string): Promise<Barrio> {
    try {
      const condition: FindOptions = { where: { especie: nombreBarrio } };
      const barrioExist: Barrio = await this.barrioEntity.findOne(condition);

      if(!barrioExist){
        const barrioCreated = await this.barrioEntity.create(nombreBarrio);
            
        if (barrioCreated) {
          return barrioCreated;
        } else {
          throw new HttpException(
            'El barrio no pudo crearse.',
          HttpStatus.BAD_REQUEST,
          );
        }
       
      } else{
        throw new HttpException(
          'El barrio ya se encuentra registrado.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
        throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  public async getAllBarrio(): Promise<Barrio[]> {
    try {
      const barrioList: Barrio[] = await this.barrioEntity.findAll();
      if (barrioList) {
        return barrioList;
      } else {
        throw new HttpException(this.barrioNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateBarrio(id: number, updateBarrio : Barrio): Promise<Barrio> {
    try {
      const condition: FindOptions = { where: { idBarrio: id } };
      const barrioExist: Barrio = await this.barrioEntity.findOne(condition);
      if (!barrioExist) {
        throw new HttpException(this.barrioNotFound, HttpStatus.BAD_REQUEST);
      } else {
        barrioExist.setBarrio(updateBarrio.barrio);
        await barrioExist.save();
        return barrioExist;
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async removeBarrio(id: number): Promise<boolean> {
    try {
      const condition: FindOptions = { where: {idBarrio: id } };
      const barrio: Barrio = await this.barrioEntity.findOne(condition);
      if (!barrio) {
        throw new HttpException(this.barrioNotFound, HttpStatus.BAD_REQUEST);
      } else {
        await this.barrioEntity.destroy(condition);
      }
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
