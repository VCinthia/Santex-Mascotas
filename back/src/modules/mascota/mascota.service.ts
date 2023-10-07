import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { MascotaDto } from './dto/create-mascota.dto';
import { InjectModel } from '@nestjs/sequelize/dist/common';
import { Mascota } from './entities/mascota.entity';
import { FindOptions } from 'sequelize';
import { MascotaEntity } from './entities/mascota.class';
import { Especie } from '../especie/entities/especie.entity';
import { FilterMascota } from './dto/filterMascota.dto';
import { Barrio } from '../barrio/entities/barrio.entity';
import {
  EspecieMascota,
  FiltroMascotaDto,
  UbicacionMascota,
  UsuarioMascota,
} from './dto/filtroMascota.dto';
import { Usuario } from '../usuario/entities/usuario.entity';

@Injectable()
export class MascotaService {
  petNotFound = 'No existe la mascota.';
  constructor(
    @InjectModel(Mascota)
    private readonly mascotaModel: typeof Mascota,
  ) {}

  public async createMascota(
    file: Express.Multer.File | undefined,
    createMascotaDto: MascotaDto,
  ): Promise<Mascota> {
    try {
      if (createMascotaDto) {
        const bufferImg: string = file
          ? await this.convertFileBase64(file)
          : null;
        const mascota: MascotaEntity = new MascotaEntity(
          createMascotaDto.color.toUpperCase(),
          createMascotaDto.tamanio.toUpperCase(),
          createMascotaDto.fechaCarga,
          bufferImg,
          createMascotaDto.descripcion,
          createMascotaDto.estado,
          createMascotaDto.activo,
          createMascotaDto.idEspecie,
          createMascotaDto.idUsuario,
          createMascotaDto.idUbicacion,
        );
        const newmascota = await this.mascotaModel.create(mascota);
        return newmascota;
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

  private async convertFileBase64(file: Express.Multer.File): Promise<string> {
    const base64Data = file.buffer.toString('base64');
    return base64Data;
  }

  public async getListMascotas(): Promise<Mascota[]> {
    try {
      const condition: FindOptions = {
        include: { all: true },
        where: { activo: true },
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
        include: { all: true },
        where: { idMascota: id },
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
        const bufferImg: string = file
          ? await this.convertFileBase64(file)
          : mascota.getFoto();
        mascota.setColor(mascotaDto.color.toUpperCase());
        mascota.setTamanio(mascotaDto.tamanio.toUpperCase());
        mascota.setFechaCarga(mascotaDto.fechaCarga);
        mascota.setFoto(bufferImg);
        mascota.setDescripcion(mascotaDto.descripcion);
        mascota.setEstado(mascotaDto.estado);
        mascota.setActivo(mascotaDto.activo);
        mascota.setIdEspecie(mascotaDto.idEspecie);
        mascota.setIdUsuario(mascotaDto.idUsuario);
        mascota.setIdUbicacion(mascotaDto.idUbicacion);
        mascota.setUpdateAt(new Date());
      }
      await mascota.save();
      return mascota;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async deleteMascotaById(id: number): Promise<boolean> {
    try {
      const condition: FindOptions = { where: { idMascota: id } };
      const mascota: Mascota = await this.mascotaModel.findOne(condition);
      if (!mascota) {
        throw new HttpException(this.petNotFound, HttpStatus.BAD_REQUEST);
      } else {
        mascota.setActivo(false);
      }
      await mascota.save();
      return true;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  public async buscarMascotas(filtro: FilterMascota) {
    try {
      const whereClause: any = {};

      if (filtro.especie && filtro.especie.length > 0) {
        const especie = await Especie.findOne({
          where: { especie: filtro.especie.toUpperCase() },
        });

        if (especie) {
          whereClause.idEspecie = especie.getIdEspecie();
        }
      }
      if (filtro.color && filtro.color.length > 0) {
        whereClause.color = filtro.color.toUpperCase();
      }
      if (filtro.tamanio && filtro.tamanio.length > 0) {
        whereClause.tamanio = filtro.tamanio.toUpperCase();
      }
      if (filtro.zona && filtro.zona.length > 0) {
        const barrio = await Barrio.findOne({
          where: { barrio: filtro.zona.toUpperCase() },
        });
        if (barrio) {
          whereClause.idUbicacion = barrio.getIdUbicacion();
        }
      }
      if (filtro.estado && filtro.estado.length > 0) {
        whereClause.estado = filtro.estado.toUpperCase();
      }

      const mascotas = await Mascota.findAll({
        where: whereClause,
        include: { all: true },
      });
      const mascotaFiltro: FiltroMascotaDto[] = [];
      if (mascotas && mascotas.length > 0) {
        for (let i = 0; i < mascotas.length; ++i) {
          const mascota: FiltroMascotaDto = new FiltroMascotaDto();
          const usuarioMascota: UsuarioMascota = new UsuarioMascota();
          const especieMascota: EspecieMascota = new EspecieMascota();
          const ubicacionMascota: UbicacionMascota = new UbicacionMascota();

          const mascotaAux = mascotas[i];
          const usuarioAux = await Usuario.findOne({
            where: { idUsuario: mascotaAux.getIdUsuario() },
          });

          const especieAux = await Especie.findOne({
            where: { idEspecie: mascotaAux.getIdEspecie() },
          });
          const ubicacionAux = await Barrio.findOne({
            where: { idUbicacion: mascotaAux.getIdUbicacion() },
          });
          mascota.color = mascotaAux.getColor();
          mascota.tamanio = mascotaAux.getTamanio();
          mascota.fechaCarga = mascotaAux.getFechaCarga();
          mascota.foto = mascotaAux.getFoto() ? mascotaAux.getFoto() : null;
          mascota.descripcion = mascotaAux.getDescripcion();
          mascota.estado = mascotaAux.getEstado();
          mascota.activo = mascotaAux.getActivo();
          usuarioMascota.usuarioId = usuarioAux.getIdUsuario();
          usuarioMascota.nombre = usuarioAux.getNombre();
          usuarioMascota.apellido = usuarioAux.getApellido();
          usuarioMascota.telefono = usuarioAux.getTelefono();
          mascota.usuario = usuarioMascota;
          ubicacionMascota.idUbicacion = ubicacionAux.getIdUbicacion();
          ubicacionMascota.nombre = ubicacionAux.getBarrio();
          mascota.ubicacion = ubicacionMascota;
          especieMascota.idEspecie = especieAux.getIdEspecie();
          especieMascota.nombre = especieAux.getEspecie();
          mascota.especie = especieMascota;

          mascotaFiltro.push(mascota);
        }
      }
      return mascotaFiltro;
    } catch (error) {
      throw error;
    }
  }

  public async getMascotaByDniUsuario(
    dni: number,
  ): Promise<FiltroMascotaDto[]> {
    const conditionDni: FindOptions = { where: { dniPersona: dni } };

    const usuarioAux = await Usuario.findOne(conditionDni);
    if (usuarioAux) {
      const conditionM: FindOptions = {
        where: { idUsuario: usuarioAux.getIdUsuario() },
      };
      const mascotas = await Mascota.findAll(conditionM);
      const mascotaFiltro: FiltroMascotaDto[] = [];
      if (mascotas.length > 0) {
        for (let i = 0; i < mascotas.length; ++i) {
          const mascota: FiltroMascotaDto = new FiltroMascotaDto();
          const usuarioMascota: UsuarioMascota = new UsuarioMascota();
          const especieMascota: EspecieMascota = new EspecieMascota();
          const ubicacionMascota: UbicacionMascota = new UbicacionMascota();

          const mascotaAux = mascotas[i];
          const especieAux = await Especie.findOne({
            where: { idEspecie: mascotaAux.getIdEspecie() },
          });
          const ubicacionAux = await Barrio.findOne({
            where: { idUbicacion: mascotaAux.getIdUbicacion() },
          });
          mascota.color = mascotaAux.getColor();
          mascota.tamanio = mascotaAux.getTamanio();
          mascota.fechaCarga = mascotaAux.getFechaCarga();
          mascota.foto = mascotaAux.getFoto() ? mascotaAux.getFoto() : null;
          mascota.descripcion = mascotaAux.getDescripcion();
          mascota.estado = mascotaAux.getEstado();
          mascota.activo = mascotaAux.getActivo();
          usuarioMascota.usuarioId = usuarioAux.getIdUsuario();
          usuarioMascota.nombre = usuarioAux.getNombre();
          usuarioMascota.apellido = usuarioAux.getApellido();
          usuarioMascota.telefono = usuarioAux.getTelefono();
          mascota.usuario = usuarioMascota;
          ubicacionMascota.idUbicacion = ubicacionAux.getIdUbicacion();
          ubicacionMascota.nombre = ubicacionAux.getBarrio();
          mascota.ubicacion = ubicacionMascota;
          especieMascota.idEspecie = especieAux.getIdEspecie();
          especieMascota.nombre = especieAux.getEspecie();
          mascota.especie = especieMascota;

          mascotaFiltro.push(mascota);
        }
      }
      return mascotaFiltro;
    } else {
      throw new HttpException(
        `No se encontro el usuario con el dni: ${dni}`,
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
