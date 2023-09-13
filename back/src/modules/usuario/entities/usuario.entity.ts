import {
  Column,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Login } from 'src/modules/login/entities/login.entity';
import { Mascota } from 'src/modules/mascota/entities/mascota.entity';

@Table({
  tableName: 'usuarios',
})
export class Usuario extends Model<Usuario> {
  @PrimaryKey
  @AutoIncrement
  @Column
  private idUsuario: number;

  @Column
  private dniPersona: number;

  @Column
  private nombre: string;

  @Column
  private apellido: string;

  @Column
  private telefono: string;

  @Column
  private activo: boolean;

  @ForeignKey(() => Login)
  @Column
  private idLogin: number;

  @BelongsTo(() => Login)
  private user: Login;

  @HasMany(() => Mascota)
  private mascotas: Mascota[];

  // métodos getters y setters
  public getIdUsuario(): number {
    return this.idUsuario;
  }
  public getDniPersona(): number {
    return this.dniPersona;
  }
  public setDniPersona(dniPersona: number): void {
    this.dniPersona = dniPersona;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  public getApellido(): string {
    return this.apellido;
  }
  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }
  public getTelefono(): string {
    return this.telefono;
  }
  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }
  public getActivo(): boolean {
    return this.activo;
  }
  public setActivo(activo: boolean): void {
    this.activo = activo;
  }
  public getIdLogin(): number {
    return this.idLogin;
  }
  public setIdLogin(idLogin: number): void {
    this.idLogin = idLogin;
  }
  public getUser(): Login {
    return this.user;
  }
  public setUser(user: Login): void {
    this.user = user;
  }
  public getUpdateAt(): Date {
    return this.updatedAt;
  }
  public setUpdateAt(newDate: Date): void {
    this.updatedAt = newDate;
  }
}
