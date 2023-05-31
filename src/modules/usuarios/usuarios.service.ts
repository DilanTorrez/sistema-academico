import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';



@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private usuariosRepository: Repository<Usuario>,
  ) {}

  findAll(): Promise<Usuario[]> {
    return this.usuariosRepository.find();
  }
  
  findOne(id: number): Promise<Usuario> {
    return this.usuariosRepository.findOne({ where: { id } });
  }
  
  create(usuario: Usuario): Promise<Usuario> {
    return this.usuariosRepository.save(usuario);
  }
  
  async update(id: number, usuario: Usuario): Promise<Usuario> {
    await this.usuariosRepository.update(id, usuario);
    return this.usuariosRepository.findOne({ where: { id } });
  }
  
  async delete(id: number): Promise<void> {
    await this.usuariosRepository.delete(id);
  }
}
