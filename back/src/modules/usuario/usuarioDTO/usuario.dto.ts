export class UsuarioDTO {
  readonly dniPersona: number;
  readonly nombre: string;
  readonly apellido: string;
  readonly telefono: string;
  readonly activo: boolean;
  readonly user: {
    email: string;
    password: string;
  };
}
