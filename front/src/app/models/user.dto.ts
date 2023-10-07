export class UserDTO {
    idUsuario?: number;
    nombre: string;
    apellido: string;
    telefono: string;
    dniPersona: number;
    respuesta: string;
    user: {
        email: string;
        password: string;
    };

    constructor(nombre: string, apellido: string, telefono: string, dniPersona: number, respuesta: string, user: { email: string, password: string },) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dniPersona = dniPersona;
        this.respuesta = respuesta;
        this.user = user
    }
}