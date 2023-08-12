export class UsuarioEntity {
  dniPersona: string;
  nombre: string;
  apellido: string;
  telefono: string;
  userEmail: string;
  constructor(
    dniPersona: string,
    nombre: string,
    apellido: string,
    telefono: string,
    userEmail: string,
  ) {
    this.dniPersona = dniPersona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.userEmail = userEmail;
  }
}
