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
  @PrimaryKey
  @AutoIncrement
  @Column
  idCiudad: number;

  @Column
  nombre: string;

  @HasMany(() => Barrio)
  ciudad: Barrio[];

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
  public getUpdateAt(): Date {
    return this.updatedAt;
  }
  public setUpdateAt(newDate: Date): void {
    this.updatedAt = newDate;
  }
}
