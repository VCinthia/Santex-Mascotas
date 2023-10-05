import { EspecieDTO } from "./especie.dto";
import { BarrioDTO } from "./ubicacion.dto";
import { UserDTO } from "./user.dto";

export class FiltroMascotaDto {
  idMascota?: number;
  color: string;
  tamanio: string;
  fechaCarga: Date;
  foto: File;//Buffer | undefined;//
  descripcion: string;
  estado: string;
  activo: boolean;
  usuario: UserDTO;
  ubicacion: BarrioDTO;
  especie: EspecieDTO;

  constructor(
    color: string,
    tamanio: string,
    fechaCarga: Date,
    foto: File,//Buffer | undefined,//
    descripcion: string,
    estado: string,
    activo: boolean,
    usuario: UserDTO,
    ubicacion: BarrioDTO,
    especie: EspecieDTO )
    {
    this.color= color,
    this.tamanio= tamanio,
    this.fechaCarga= fechaCarga,
    this.foto= foto,
    this.descripcion= descripcion,
    this.estado= estado,
    this.activo= activo,
    this.usuario= usuario,
    this.ubicacion= ubicacion,
    this.especie= especie
  }
  }
  
  