import {
  Column,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { Login } from 'src/modules/login/entities/login.entity';
import { Mascota } from 'src/modules/mascota/entities/mascota.entity';

@Table({
  tableName: 'usuarios',
})
export class Usuario extends Model<Usuario> {
  @PrimaryKey
  @Column
  private dniPersona: string;

  @Column
  private nombre: string;

  @Column
  private apellido: string;

  @Column
  private telefono: string;

  @ForeignKey(() => Login)
  @Column
  private userEmail: string;
  @BelongsTo(() => Login)
  public user: Login;

  @HasMany(() => Mascota)
  mascotas: Mascota[];

  // métodos getters y setters
  public getDniPersona(): string {
    return this.dniPersona;
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
  public getUser(): Login {
    return this.user;
  }
  public setUser(user: Login): void {
    this.user = user;
  }
  public getUserEmail(): string {
    return this.userEmail;
  }
  public setUserEmail(email: string): void {
    this.userEmail = email;
  }
  public getUpdateAt(): Date {
    return this.updatedAt;
  }
  public setUpdateAt(newDate: Date): void {
    this.updatedAt = newDate;
  }
}
