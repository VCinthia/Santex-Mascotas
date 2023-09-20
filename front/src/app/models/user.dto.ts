import { LoginUserDTO } from "./login.dto";

export class UserDTO {
    nombre: string;
    apellido: string;
    telefono: string;
    dniPersona: number;
    user : {
        email: string;
        password: string;
    };
    
    // userLogin: UserLoginDTO
    //     email: string;
    //     password : string;
    
    //secret: string;

    constructor(nombre: string, apellido: string, telefono: string, dniPersona: number, user : {email: string, password: string},/* userLogin : any, email: string, password: string/*, secret: string,*/) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dniPersona = dniPersona;
        this.user = user 
        // this.userLogin = {
        //     email : email,
        //     password : password
        //     this.secret = secret;
        // }
    }
}