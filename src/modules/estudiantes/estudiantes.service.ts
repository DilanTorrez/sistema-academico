import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find({ relations: ['usuario'] });
  }
  
  findOne(id: number): Promise<Estudiante> {
    return this.estudiantesRepository.findOne({ where: { id }, relations: ['usuario'] });
  }
  
  create(estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesRepository.save(estudiante);
  }
  
  async update(id: number, estudiante: Partial<Estudiante>): Promise<Estudiante> { 
  await this.estudiantesRepository.update(id, estudiante); 
  return this.estudiantesRepository.findOne({ where: { id }, relations: ['usuario'] });
}
  
  delete(id: number): Promise<void> {
    return this.estudiantesRepository.delete(id).then(() => {});
  }
}
