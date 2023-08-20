export class BarrioEntity {
    idBarrio:number;
    barrio: string;
    ciudadIdCiudad: number;


  constructor(barrio: string, ciudadIdCiudad: number) {
       this.barrio = barrio;
       this.ciudadIdCiudad = ciudadIdCiudad;
  }
}
