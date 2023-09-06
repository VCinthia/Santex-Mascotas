import {
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  Model,
} from 'sequelize-typescript';

@Table({
  tableName: 'login',
})
export class Login extends Model<Login> {
  @PrimaryKey
  @AutoIncrement
  @Column
  private idLogin: number;

  @Column
  private email: string;

  @Column
  private password: string;

  // getter and setters
  public getIdLogin(): number {
    return this.idLogin;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
  public getPassword(): string {
    return this.password;
  }
  public setPassword(password: string): void {
    this.password = password;
  }
}
