import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonalAdministrativo } from '../personal-administrativo/personal-administrativo.entity';

@Injectable()
export class PersonalAdministrativoService {
  constructor(
    @InjectRepository(PersonalAdministrativo)
    private personalAdministrativoRepository: Repository<PersonalAdministrativo>,
  ) {}

  findAll(): Promise<PersonalAdministrativo[]> {
    return this.personalAdministrativoRepository.find({ relations: ['usuario'] });
  }
  
  findOne(id: number): Promise<PersonalAdministrativo> {
    return this.personalAdministrativoRepository.findOne({ where: { id }, relations: ['usuario'] });
  }
  
  create(personalAdministrativo: PersonalAdministrativo): Promise<PersonalAdministrativo> {
    return this.personalAdministrativoRepository.save(personalAdministrativo);
  }
  
  async update(id: number, personalAdministrativo: Partial<PersonalAdministrativo>): Promise<PersonalAdministrativo> { 
  await this.personalAdministrativoRepository.update(id, personalAdministrativo); 
  return this.personalAdministrativoRepository.findOne({ where: { id }, relations: ['usuario'] });
}
  
  delete(id: number): Promise<void> {
    return this.personalAdministrativoRepository.delete(id).then(() => {});
  }
}
