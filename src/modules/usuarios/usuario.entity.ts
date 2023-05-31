import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { Estudiante } from '../estudiantes/estudiante.entity';
import { PersonalAdministrativo } from '../personal-administrativo/personal-administrativo.entity';
import { Profesor } from '../profesores/profesor.entity';

@Entity('Usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'date' })
  fechaNacimiento: Date;

  @Column()
  telefono: string;

  @OneToOne(() => Estudiante, (estudiante) => estudiante.usuario)
  estudiante: Estudiante;

  @OneToOne(() => Profesor, (profesor) => profesor.usuario)
  profesor: Profesor;

  @OneToOne(() => PersonalAdministrativo, (personalAdministrativo) => personalAdministrativo.usuario)
  personalAdministrativo: PersonalAdministrativo;
}
