export class MascotaEntity {
  color: string;
  tamanio: string;
  fechaCarga: Date;
  foto: string;
  descripcion: string;
  estado: string;
  activo: boolean;
  idEspecie: number;
  idUsuario: number;
  idUbicacion: number;
  constructor(
    color: string,
    tamanio: string,
    fechaCarga: Date,
    foto: string,
    descripcion: string,
    estado: string,
    activo: boolean,
    idEspecie: number,
    idUsuario: number,
    idUbicacion: number,
  ) {
    this.color = color;
    this.tamanio = tamanio;
    this.fechaCarga = fechaCarga;
    this.foto = foto;
    this.descripcion = descripcion;
    this.estado = estado;
    this.activo = activo;
    this.idEspecie = idEspecie;
    this.idUsuario = idUsuario;
    this.idUbicacion = idUbicacion;
  }
}
