export class MascotaEntity {
  color: string;
  fechaCarga: Date;
  foto: string;
  descripcion: string;
  adoptable: boolean;
  estado: string;
  idEspecie: number;
  dniPersona: string;
  idUbicacion: number;
  constructor(
    color: string,
    fechaCarga: Date,
    foto: string,
    descripcion: string,
    adoptable: boolean,
    estado: string,
    idEspecie: number,
    dniPersona: string,
    idUbicacion: number,
  ) {
    this.color = color;
    this.fechaCarga = fechaCarga;
    this.foto = foto;
    this.descripcion = descripcion;
    this.adoptable = adoptable;
    this.estado = estado;
    this.idEspecie = idEspecie;
    this.dniPersona = dniPersona;
    this.idUbicacion = idUbicacion;
  }
}
