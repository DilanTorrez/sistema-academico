import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('PersonalAdministrativo')
export class PersonalAdministrativo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({length: 100})
  cargo: string;

  @OneToOne(() => Usuario, { onDelete: 'CASCADE' })
  @JoinColumn()
  usuario: Usuario;
}
