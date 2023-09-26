import { CiudadDTO } from "./ciudad.dto";

export class BarrioDTO {
    idUbicacion?: number;
    barrio : string;
    idCiudad : CiudadDTO;
    
    constructor(barrio : string, idCiudad : CiudadDTO){
        this.barrio = barrio;
        this.idCiudad = idCiudad;
    }
}