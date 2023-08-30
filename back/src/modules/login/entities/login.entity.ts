import { Column, Table, PrimaryKey, Model } from 'sequelize-typescript';

@Table({
  tableName: 'login',
})
export class Login extends Model<Login> {
  @PrimaryKey
  @Column
  private email: string;

  @Column
  private password: string;

  // getter and setters
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
  public getUpdateAt(): Date {
    return this.updatedAt;
  }
  public setUpdateAt(newDate: Date): void {
    this.updatedAt = newDate;
  }
}
