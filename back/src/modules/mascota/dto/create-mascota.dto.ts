export class MascotaDto {
  readonly idEspecie: number;
  readonly color: string;
  readonly tamanio: string;
  readonly fechaCarga: Date;
  readonly foto: Express.Multer.File;
  readonly descripcion: string;
  readonly estado: string;
  readonly activo:boolean;
  readonly dniPersona: string;
  readonly idUbicacion: number;
}
