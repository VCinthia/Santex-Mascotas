export class UsuarioDTO {
  readonly dniPersona: string;
  readonly nombre: string;
  readonly apellido: string;
  readonly telefono: string;
  readonly user: {
    email: string;
    password: string;
  };
}
