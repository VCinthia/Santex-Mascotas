import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MascotaDto } from './dto/create-mascota.dto';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { Mascota } from './entities/mascota.entity';
import { FindOptions } from 'sequelize';
import { MascotaEntity } from './entities/mascota.class';

@Injectable()
export class MascotaService {
  petNotFound = 'No existe la mascota.';
  constructor(
    @InjectModel(Mascota)
    private readonly mascotaModel: typeof Mascota,
  ) {}

  public async createMascota(
    file: Express.Multer.File,
    createMascotaDto: MascotaDto,
  ): Promise<Mascota> {
    try {
      if (createMascotaDto) {
        const condition: FindOptions = {
          where: { dniPersona: createMascotaDto.dniPersona },
        };
        const mascotaExist = await this.mascotaModel.findOne(condition);
        if (!mascotaExist) {
          const mascota: MascotaEntity = new MascotaEntity(
            createMascotaDto.color,
            createMascotaDto.tamanio,
            createMascotaDto.fechaCarga,
            file.buffer,
            createMascotaDto.descripcion,
            createMascotaDto.estado,
            createMascotaDto.activo,
            createMascotaDto.idEspecie,
            createMascotaDto.dniPersona,
            createMascotaDto.idUbicacion,
          );
          const newmascota = await this.mascotaModel.create(mascota);
          return newmascota;
        }
        throw new HttpException(
          'La mascota ya se encuentra registrado.',
          HttpStatus.BAD_REQUEST,
        );
      } else {
        throw new HttpException(
          'Los datos para crear a la mascota no son válidos.',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getListMascotas(): Promise<Mascota[]> {
    try {
     let condition: FindOptions = {
        include: { all: true },
        where: { activo: true },//
      };
// ver si es necesario crear otra funcion que me permita traer las mascotas activas, eligiendo si estan "perdidas" o son "adoptables"
      const mascotaList: Mascota[] = await this.mascotaModel.findAll(condition);
      if (mascotaList) {
        return mascotaList;
      } else {
        throw new HttpException(this.petNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async getMascotaById(id: number): Promise<Mascota> {
    try {
      const condition: FindOptions = {
        include: { all: true },//ver..
        where: { idMascota: id },//ver esta sentencia
      };
      const mascota: Mascota = await this.mascotaModel.findOne(condition);
      if (mascota) {
        return mascota;
      } else {
        throw new HttpException(this.petNotFound, HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async updateMascota(
    id: number,
    file: Express.Multer.File,
    mascotaDto: MascotaDto,
  ): Promise<Mascota> {
    try {
      const condition: FindOptions = { where: { idMascota: id } };
      const mascota: Mascota = await this.mascotaModel.findOne(condition);
      if (!mascota) {
        throw new HttpException(this.petNotFound, HttpStatus.BAD_REQUEST);
      } else {
        mascota.setColor(mascotaDto.color);
        mascota.setTamanio(mascotaDto.tamanio);
        mascota.setFechaCarga(mascotaDto.fechaCarga);
        mascota.setFoto(file.buffer);
        mascota.setDescripcion(mascotaDto.descripcion);
        mascota.setEstado(mascotaDto.estado);
        mascota.setActivo(mascotaDto.activo);
        mascota.setIdEspecie(mascotaDto.idEspecie);
        mascota.setDniPersona(mascotaDto.dniPersona);
        mascota.setIdUbicacion(mascotaDto.idUbicacion);
      }
      await mascota.save();
      return mascota;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteMascotaById(id: number): Promise<Mascota> {
    try {
      const condition: FindOptions = { where: { idMascota: id } };
      const mascota: Mascota = await this.mascotaModel.findOne(condition);
      if (!mascota) {
        throw new HttpException(this.petNotFound, HttpStatus.BAD_REQUEST);
      } else {
        mascota.setActivo(false);// modifique el estado de la mascota
      }
      await mascota.save();
      return mascota;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
