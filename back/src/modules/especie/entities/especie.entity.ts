import {
  Table,
  Column,
  PrimaryKey,
  Model,
  AutoIncrement,
  HasMany,
} from 'sequelize-typescript';
import { Mascota } from 'src/modules/mascota/entities/mascota.entity';

//falta la relacion con la tabla mascotas

@Table({
  tableName: 'especies',
})
export class Especie extends Model<Especie> {
  //@PrimaryGeneratedColumn
  @PrimaryKey
  @AutoIncrement // verificar que dentro de las configuraciones de la DB lo permita!
  @Column
  idEspecie: number;

  @Column
  especie: string;

  @HasMany(() => Mascota)
  mascotas: Mascota[];

  // getter and setters
  public getIdEspecie(): number {
    return this.idEspecie;
  }
  public getEspecie(): string {
    return this.especie;
  }
  public setEspecie(especie: string): void {
    this.especie = especie;
  }
}

/*@Entity()// 

export class Especie {
    @PrimaryGeneratedColumn()
    idEspecie:number;

    @Column()
    especie: string;

    /*falta la relacion con la tabla mascotas y verificar si puedo dejar aca constructor y getter and setter otengo que pasarlos a archivo de la clase

    constructor ( especie : string){
        this.especie= especie;
    };

    public getIdEspecie() : number { return this.idEspecie }
    public getEspecie() : string { return this.especie };
    public setEspecie ( especie : string) : void { this.especie = especie };
}*/
