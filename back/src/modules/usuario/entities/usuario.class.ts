export class UsuarioEntity {
  idUsuario: number;
  dniPersona: number;
  nombre: string;
  apellido: string;
  telefono: string;
  activo:boolean;
  idLogin: number;
  constructor(
    dniPersona: number,
    nombre: string,
    apellido: string,
    telefono: string,
    activo: boolean,
    idLogin: number,
  ) {
    this.dniPersona = dniPersona;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.activo = activo;
    this.idLogin = idLogin;
  }
}
