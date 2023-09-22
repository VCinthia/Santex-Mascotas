import { CiudadDTO } from "./ciudad.dto";

export class BarrioDTO {
    barrio : string;
    ciudad : CiudadDTO;
    
    constructor(barrio : string, ciudad : CiudadDTO){
        this.barrio = barrio;
        this.ciudad = ciudad;
    }
}