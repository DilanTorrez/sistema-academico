import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estudiante } from './estudiante.entity';
import { CreateEstudianteDto, UpdateEstudianteDto } from './estudiante.dto';

@Injectable()
export class EstudiantesService {
  constructor(
    @InjectRepository(Estudiante)
    private estudiantesRepository: Repository<Estudiante>,
  ) {}

  findAll(): Promise<Estudiante[]> {
    return this.estudiantesRepository.find();
  }

  findOne(id: number): Promise<Estudiante> {
  return this.estudiantesRepository.findOne({ where: { id } });//Parece que TypeORM espera un objeto con opciones en lugar de un número para el método findOne. Para solucionar este problema, modifica el método findOne en estudiantes.service.ts " id se cambio a { where: { id } "
}


  async create(createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
    const estudiante = new Estudiante();
    estudiante.nombre = createEstudianteDto.nombre;
    estudiante.apellido = createEstudianteDto.apellido;
    estudiante.email = createEstudianteDto.email;
    estudiante.fechaNacimiento = createEstudianteDto.fechaNacimiento;
    estudiante.telefono = createEstudianteDto.telefono;

    return this.estudiantesRepository.save(estudiante);
  }

  async update(
    id: number,
    updateEstudianteDto: UpdateEstudianteDto,
  ): Promise<Estudiante> {
    const estudiante = await this.estudiantesRepository.findOne({ where: { id } }); //Parece que TypeORM espera un objeto con opciones en lugar de un número para el método findOne. Para solucionar este problema, modifica el método findOne en estudiantes.service.ts " id se cambio a { where: { id } "
    if (updateEstudianteDto.nombre) {
      estudiante.nombre = updateEstudianteDto.nombre;
    }
    if (updateEstudianteDto.apellido) {
      estudiante.apellido = updateEstudianteDto.apellido;
    }
    if (updateEstudianteDto.email) {
      estudiante.email = updateEstudianteDto.email;
    }
    if (updateEstudianteDto.fechaNacimiento) {
      estudiante.fechaNacimiento = updateEstudianteDto.fechaNacimiento;
    }
    if (updateEstudianteDto.telefono) {
      estudiante.telefono = updateEstudianteDto.telefono;
    }

    return this.estudiantesRepository.save(estudiante);
  }

  async remove(id: number): Promise<void> {
    await this.estudiantesRepository.delete(id);
  }
}
