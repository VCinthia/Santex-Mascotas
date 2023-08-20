import{ Table, Column, PrimaryKey, Model, AutoIncrement} from 'sequelize-typescript';


@Table({
  tableName: 'barrios',
})
export class Barrio extends Model<Barrio> {
  //@PrimaryGeneratedColumn
    @PrimaryKey
    @AutoIncrement// verificar que dentro de las configuraciones de la DB lo permita!
    @Column
    idUbicacion:number;

    @Column
    barrio: string;

    @Column
    ciudadIdCiudad: number; //es la clave foranea relación con tabla Ciudades, falta agregar relación

  // getter and setters
    public getidUbicacion() : number { return this.idUbicacion }
    public getBarrio() : string { return this.barrio };
    public setBarrio ( barrio : string) : void { this.barrio = barrio };
    public getciudadIdCiudad()  : number  { return this.ciudadIdCiudad };
}
