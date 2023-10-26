export class MascotasDTO {
  idMascota?: number;
  color: string;
  tamanio: string;
  fechaCarga: Date;
  foto: File | undefined;
  descripcion: string;
  estado: string;
  activo: boolean;
  usuario: number;
  ubicacion: number;
  especie: number;

  constructor() {
    (this.color = ''),
      (this.tamanio = ''),
      (this.fechaCarga = new Date()),
      (this.foto = null!),
      (this.descripcion = ''),
      (this.estado = ''),
      (this.activo = true),
      (this.usuario = null!),
      (this.ubicacion = null!),
      (this.especie = null!);
  }
}
