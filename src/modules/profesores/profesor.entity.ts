import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('profesores')
export class Profesor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  especialidad: string;

  @OneToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn()
  usuario: Usuario;
}
