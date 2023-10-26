export class CiudadDTO {
    idCiudad ?: number;
    nombre : string;
    
    constructor(nombre : string){
        this.nombre = nombre;
    }
}