export class FiltroMascotaDto {
  color: string;
  tamanio: string;
  fechaCarga: Date;
  foto: string | undefined;
  descripcion: string;
  estado: string;
  activo: boolean;
  usuario: UsuarioMascota;
  ubicacion: UbicacionMascota;
  especie: EspecieMascota;
}

export class UsuarioMascota {
  usuarioId: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
}

export class UbicacionMascota {
  idUbicacion: number;
  nombre: string;
}

export class EspecieMascota {
  idEspecie: number;
  nombre: string;
}
