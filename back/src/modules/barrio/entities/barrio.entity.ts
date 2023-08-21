import {
  Table,
  Column,
  PrimaryKey,
  Model,
  AutoIncrement,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import { Ciudad } from 'src/modules/ciudad/entities/ciudad.entity';
import { Mascota } from 'src/modules/mascota/entities/mascota.entity';

@Table({
  tableName: 'barrios',
})
export class Barrio extends Model<Barrio> {
  //@PrimaryGeneratedColumn
  @PrimaryKey
  @AutoIncrement
  @Column
  idUbicacion: number;

  @Column
  barrio: string;

  @ForeignKey(() => Ciudad)
  @Column
  idCiudad: number;

  @HasMany(() => Mascota)
  mascotas: Mascota[];

  // getter and setters
  public getidUbicacion(): number {
    return this.idUbicacion;
  }
  public getBarrio(): string {
    return this.barrio;
  }
  public setBarrio(barrio: string): void {
    this.barrio = barrio;
  }
  public getidCiudad(): number {
    return this.idCiudad;
  }
}
