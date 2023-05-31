import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';


@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor)
    private profesoresRepository: Repository<Profesor>,
  ) {}

  findAll(): Promise<Profesor[]> {
    return this.profesoresRepository.find({ relations: ['usuario'] });
  }
  
  findOne(id: number): Promise<Profesor> {
    return this.profesoresRepository.findOne({ where: { id }, relations: ['usuario'] });
  }
  
  create(profesor: Profesor): Promise<Profesor> {
    return this.profesoresRepository.save(profesor);
  }
  
  async update(id: number, profesor: Partial<Profesor>): Promise<Profesor> { 
  await this.profesoresRepository.update(id, profesor); 
  return this.profesoresRepository.findOne({ where: { id }, relations: ['usuario'] });
}
  
  delete(id: number): Promise<void> {
    return this.profesoresRepository.delete(id).then(() => {});
  }
}
