import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { EstudiantesService } from './estudiantes.service';
import { Estudiante } from './estudiante.entity';
//swagger tags (descripcion y operadores de swagger)
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('estudiantes')
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) { }


  @ApiOperation({ summary: 'Obtener todos los estudiantes' })
  @ApiResponse({ status: 200, description: 'Lista de estudiantes' })
  @Get()
  findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un estudiante por ID' })
  @ApiResponse({ status: 200, description: 'Estudiante encontrado' })
  @ApiResponse({ status: 404, description: 'Estudiante no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<Estudiante> {
    return this.estudiantesService.findOne(id);
  }

  @Post()
  create(@Body() estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesService.create(estudiante);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() estudiante: Estudiante): Promise<Estudiante> {
    return this.estudiantesService.update(id, estudiante);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.estudiantesService.delete(id);
  }
}
