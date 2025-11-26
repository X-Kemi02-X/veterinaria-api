import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('consultas')
export class Consulta {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombreMascota: string;

  @Column()
  especie: string;
  
  @Column()
  edad: number;

  @Column()
  nombreDueno: string;

  @Column()
  telefonoContacto: string;

  @Column()
  fechaConsulta: Date;

  @Column()
  motivoConsulta: string;

  @Column()
  costoConsulta: number;

  @Column()
  estado: string;
}
