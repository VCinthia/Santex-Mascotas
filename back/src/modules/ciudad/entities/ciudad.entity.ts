import{ Table, Column, PrimaryKey, ForeignKey, BelongsTo ,Model, AutoIncrement} from 'sequelize-typescript';


@Table({
  tableName: 'ciudades',
})
export class Ciudad extends Model<Ciudad> {
  //@PrimaryGeneratedColumn
    @PrimaryKey
    @AutoIncrement// verificar que dentro de las configuraciones de la DB lo permita!
    @Column
    idCiudad:number; //@Column
    
    @Column
    nombre: string;

    /*@ForeignKey(() => Barrio)
    @Column
    private xxxx : string;
    @BelongsTo(() => Barrio)
    public xxxx : Barrio;*/

    // getter and setters
    public getIdCiudad() : number { return this.idCiudad }
    public getNombre() : string { return this.nombre };
    public setNombre ( nombre : string) : void { this.nombre = nombre };
   
}

