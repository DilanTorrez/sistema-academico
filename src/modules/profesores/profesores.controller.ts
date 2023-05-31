import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProfesoresService } from './profesores.service';
import { Profesor } from './profesor.entity';
//swagger tags (descripcion y operadores de swagger)
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('profesores')
@Controller('profesores')
export class ProfesoresController {
  constructor(private readonly profesoresService: ProfesoresService) {}

  @ApiOperation({ summary: 'Obtener todos los profesores' })
  @ApiResponse({ status: 200, description: 'Lista de profesores' })
  @Get()
  findAll(): Promise<Profesor[]> {
    return this.profesoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Profesor> {
    return this.profesoresService.findOne(id);
  }

  @ApiOperation({ summary: 'Guardar datos de un profesor' })
  @ApiResponse({ status: 200, description: 'profesor Guardado Correctamente' })
  @ApiResponse({ status: 404, description: 'los datos del profesor NO se Guardaron' })
  @Post()
  create(@Body() profesor: Profesor): Promise<Profesor> {
    return this.profesoresService.create(profesor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() profesor: Profesor): Promise<Profesor> {
    return this.profesoresService.update(id, profesor);
  }

  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.profesoresService.delete(id);
  }
}