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
  private tamanio: string;

  @Column
  private fechaCarga: Date;

  @Column({
    type: DataType.BLOB('long'),
    allowNull: true,
  })
  private foto: Buffer;

  @Column
  private descripcion: string;

  @Column
  private estado: string;

  @Column
  private activo: boolean;

  @ForeignKey(() => Especie)
  @Column
  idEspecie: number;

  @ForeignKey(() => Usuario)
  @Column
  private idUsuario: number;

  @ForeignKey(() => Barrio)
  @Column
  private idUbicacion: number;

  // getter and setters
  public getIdMascota(): number {
    return this.idMascota;
  }
  public getColor(): string {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public getTamanio(): string {
    return this.tamanio;
  }
  public setTamanio(tamanio: string): void {
    this.tamanio = tamanio;
  }
  public getFechaCarga(): Date {
    return this.fechaCarga;
  }
  public setFechaCarga(fechaCarga: Date): void {
    this.fechaCarga = fechaCarga;
  }
  public getFoto(): Buffer | undefined {
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
  public getActivo(): boolean {
    return this.activo;
  }
  public setActivo(activo: boolean): void {
    this.activo = activo;
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
  public getIdUsuario(): number {
    return this.idUsuario;
  }
  public setIdUsuario(idUsuario: number): void {
    this.idUsuario = idUsuario;
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
