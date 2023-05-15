import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param,
  } from '@nestjs/common';
  import { EstudiantesService } from './estudiantes.service';
  import { Estudiante } from './estudiante.entity';
  import { CreateEstudianteDto, UpdateEstudianteDto } from './estudiante.dto';
  
  @Controller('estudiantes')
  export class EstudiantesController {
    constructor(private readonly estudiantesService: EstudiantesService) {}
  
    @Get()
    findAll(): Promise<Estudiante[]> {
      return this.estudiantesService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: number): Promise<Estudiante> {
      return this.estudiantesService.findOne(id);
    }
  
    @Post()
    create(@Body() createEstudianteDto: CreateEstudianteDto): Promise<Estudiante> {
      return this.estudiantesService.create(createEstudianteDto);
    }
  
    @Put(':id')
    update(
      @Param('id') id: number,
      @Body() updateEstudianteDto: UpdateEstudianteDto,
    ): Promise<Estudiante> {
      return this.estudiantesService.update(id, updateEstudianteDto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
      return this.estudiantesService.remove(id);
    }
  }
  