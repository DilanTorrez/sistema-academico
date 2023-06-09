import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('Estudiantes')
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  grado: string;

  @OneToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn()
  usuario: Usuario;
}
