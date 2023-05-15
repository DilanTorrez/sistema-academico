import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto, UpdateProfesorDto } from './profesor.dto';

@Injectable()
export class ProfesoresService {
  constructor(
    @InjectRepository(Profesor)
    private readonly profesorRepository: Repository<Profesor>,
  ) {}

  async findAll(): Promise<Profesor[]> {
    return await this.profesorRepository.find();
  }

  async findOne(id: number): Promise<Profesor> {
    return await this.profesorRepository.findOne({ where: { id } });
  }

  async create(createProfesorDto: CreateProfesorDto): Promise<Profesor> {
    const profesor = new Profesor();
    profesor.nombre = createProfesorDto.nombre;
    profesor.apellido = createProfesorDto.apellido;
    profesor.email = createProfesorDto.email;
    profesor.fechaNacimiento = createProfesorDto.fechaNacimiento;
    profesor.telefono = createProfesorDto.telefono;

    return this.profesorRepository.save(profesor);
  }

  
  async update(
    id: number,
    updateProfesorDto: UpdateProfesorDto,
    ): Promise<Profesor> {
    const profesor = await this.profesorRepository.findOne({ where: { id } }); //Parece que TypeORM espera un objeto con opciones en lugar de un número para el método findOne. Para solucionar este problema, modifica el método findOne en estudiantes.service.ts " id se cambio a { where: { id } "
    if (updateProfesorDto.nombre) {
        profesor.nombre = updateProfesorDto.nombre;
    }
    if (updateProfesorDto.apellido) {
        profesor.apellido = updateProfesorDto.apellido;
    }
    if (updateProfesorDto.email) {
        profesor.email = updateProfesorDto.email;
    }
    if (updateProfesorDto.fechaNacimiento) {
        profesor.fechaNacimiento = updateProfesorDto.fechaNacimiento;
    }
    if (updateProfesorDto.telefono) {
        profesor.telefono = updateProfesorDto.telefono;
    }

    return this.profesorRepository.save(profesor);
    }

    async remove(id: number): Promise<void> {
    await this.profesorRepository.delete(id);
    }
}