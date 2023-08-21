import {
  Table,
  Column,
  PrimaryKey,
  Model,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Barrio } from 'src/modules/barrio/entities/barrio.entity';

@Table({
  tableName: 'ciudades',
})
export class Ciudad extends Model<Ciudad> {
  //@PrimaryGeneratedColumn
  @PrimaryKey
  @AutoIncrement // verificar que dentro de las configuraciones de la DB lo permita!
  @Column
  idCiudad: number; //@Column

  @Column
  nombre: string;

  @HasMany(() => Barrio)
  ciudad: Barrio[];
  /*@ForeignKey(() => Barrio)
    @Column
    private xxxx : string;
    @BelongsTo(() => Barrio)
    public xxxx : Barrio;*/

  // getter and setters
  public getIdCiudad(): number {
    return this.idCiudad;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
}
