export class MascotaDto {
  readonly idEspecie: number;
  readonly color: string;
  readonly fechaCarga: Date;
  readonly foto: Express.Multer.File;
  readonly descripcion: string;
  readonly adoptable: boolean;
  readonly estado: string;
  readonly dniPersona: string;
  readonly idUbicacion: number;
}
