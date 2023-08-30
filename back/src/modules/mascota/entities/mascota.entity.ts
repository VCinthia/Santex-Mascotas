import {
  Column,
  Table,
  PrimaryKey,
  Model,
  AutoIncrement,
  ForeignKey,
  DataType,
} from 'sequelize-typescript';
import { Barrio } from 'src/modules/barrio/entities/barrio.entity';
import { Especie } from 'src/modules/especie/entities/especie.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';

@Table({
  tableName: 'Mascotas',
})
export class Mascota extends Model<Mascota> {
  @PrimaryKey
  @AutoIncrement
  @Column
  private idMascota: number;

  @Column
  private color: string;

  @Column
  private fechaCarga: Date;

  @Column(DataType.BLOB('long'))
  private foto: Buffer;

  @Column
  private descripcion: string;

  @Column
  private adoptable: boolean;

  @Column
  private estado: string;

  @ForeignKey(() => Especie)
  @Column
  idEspecie: number;

  @ForeignKey(() => Usuario)
  @Column
  private dniPersona: string;

  @ForeignKey(() => Barrio)
  @Column
  private idUbicacion: number;

  // getter and setters
  public getIdMascota(): number {
    return this.idMascota;
  }
  public setIdMascota(idMascota: number): void {
    this.idMascota = idMascota;
  }
  public getColor(): string {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public getFechaCarga(): Date {
    return this.fechaCarga;
  }
  public setFechaCarga(fechaCarga: Date): void {
    this.fechaCarga = fechaCarga;
  }
  public getFoto(): Buffer {
    return this.foto;
  }
  public setFoto(foto: Buffer): void {
    this.foto = foto;
  }
  public getDescripcion(): string {
    return this.descripcion;
  }
  public setDescripcion(descripcion: string): void {
    this.descripcion = descripcion;
  }
  public getAdoptable(): boolean {
    return this.adoptable;
  }
  public setAdoptable(adoptable: boolean): void {
    this.adoptable = adoptable;
  }
  public getEstado(): string {
    return this.estado;
  }
  public setEstado(estado: string): void {
    this.estado = estado;
  }
  public getIdEspecie(): number {
    return this.idEspecie;
  }
  public setIdEspecie(idEspecie: number): void {
    this.idEspecie = idEspecie;
  }
  public getDniPersona(): string {
    return this.dniPersona;
  }
  public setDniPersona(dniPersona: string): void {
    this.dniPersona = dniPersona;
  }
  public getIdUbicacion(): number {
    return this.idUbicacion;
  }
  public setIdUbicacion(idUbicacion: number): void {
    this.idUbicacion = idUbicacion;
  }
  public getUpdateAt(): Date {
    return this.updatedAt;
  }
  public setUpdateAt(newDate: Date): void {
    this.updatedAt = newDate;
  }
}
