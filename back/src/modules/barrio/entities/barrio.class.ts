export class BarrioEntity {
  barrio: string;
  idCiudad: number;

  constructor(barrio: string, idCiudad: number) {
    this.barrio = barrio;
    this.idCiudad = idCiudad;
  }
}
