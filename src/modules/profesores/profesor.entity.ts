import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('profesores')
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 100 })
  apellido: string;

  @Column({ unique: true, length: 100 })
  email: string;

  @Column()
  fechaNacimiento: Date;

  @Column({ nullable: true })
  telefono: string;
}
