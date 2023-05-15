import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor.entity';
import { CreateProfesorDto, UpdateProfesorDto } from './profesor.dto';

@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @Get()
  findAll(): Promise<Profesor[]> {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Profesor> {
    return this.profesoresService.findOne(id);
  }

  @Post()
  create(@Body() createProfesorDto: CreateProfesorDto): Promise<Profesor> {
    return this.profesoresService.create(createProfesorDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateProfesorDto: UpdateProfesorDto): Promise<Profesor> {
    return this.profesoresService.update(id, updateProfesorDto);
  }

  /*@Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.profesoresService.delete(id);
  }*/
  @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.profesoresService.remove(id);
    }
}