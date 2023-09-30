import { EspecieDTO } from "./especie.dto";
import { BarrioDTO } from "./ubicacion.dto";
import { UserDTO } from "./user.dto";

export class MascotasDTO {
  idMascota?: number;
  color: string;
  tamanio: string;
  fechaCarga: Date;
  //foto: Buffer | undefined;//string;//
  foto: File | undefined;
  descripcion: string;
  estado: string;
  activo: boolean;
  // usuario: UserDTO;
  // ubicacion: BarrioDTO;
  // especie: EspecieDTO;
  usuario: number;
  ubicacion: number;
  especie: number;

  constructor(
    // color: string,
    // tamanio: string,
    // fechaCarga: Date,
    // foto: string,//Buffer | undefined,//
    // descripcion: string,
    // estado: string,
    // activo: boolean,
    // usuario: UserDTO,
    // ubicacion: BarrioDTO,
    // especie: EspecieDTO 
    )
    {
    // this.color= color,
    // this.tamanio= tamanio,
    // this.fechaCarga= fechaCarga,
    // this.foto= foto,
    // this.descripcion= descripcion,
    // this.estado= estado,
    // this.activo= activo,
    // this.usuario= usuario,
    // this.ubicacion= ubicacion,
    // this.especie= especie
    this.color= '',
    this.tamanio= '',
    this.fechaCarga= new Date,
    this.foto = null!,
    this.descripcion= '',
    this.estado= '',
    this.activo= true,
    // this.usuario= new UserDTO('','','', null!, {email:'',password:''}),
    // //this.usuario= null!
    // this.ubicacion= new BarrioDTO(null!,{nombre:''}),
    // this.especie= new EspecieDTO('');
    this.usuario = null!,
    this.ubicacion = null!,
    this.especie= null!
  }
}