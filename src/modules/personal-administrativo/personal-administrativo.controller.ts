import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { PersonalAdministrativoService } from '../personal-administrativo/personal-administrativo.service';
import { PersonalAdministrativo } from '../personal-administrativo/personal-administrativo.entity';
//swagger tags (descripcion y operadores de swagger)
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('personalAdministrativo')
@Controller('personalAdministrativo')
export class PersonalAdministrativoController {
  constructor(private readonly personalAdministrativoService: PersonalAdministrativoService) { }


  @ApiOperation({ summary: 'Obtener todo el personal administrativo' })
  @ApiResponse({ status: 200, description: 'Lista de personal administrativo' })
  @Get()
  findAll(): Promise<PersonalAdministrativo[]> {
    return this.personalAdministrativoService.findAll();
  }

  @ApiOperation({ summary: 'Obtener un personal administrativo por ID' })
  @ApiResponse({ status: 200, description: 'personal administrativo encontrado' })
  @ApiResponse({ status: 404, description: 'personal administrativo no encontrado' })
  @Get(':id')
  findOne(@Param('id') id: number): Promise<PersonalAdministrativo> {
    return this.personalAdministrativoService.findOne(id);
  }

  @ApiOperation({ summary: 'Crear nuevos datos de un personal administrativo' })
  @ApiResponse({ status: 200, description: 'personal administrativo Creado' })
  @ApiResponse({ status: 404, description: 'error de datos ingresados (no se creo el personal administrativo)' })
  @Post()
  create(@Body() personalAdministrativo: PersonalAdministrativo): Promise<PersonalAdministrativo> {
    return this.personalAdministrativoService.create(personalAdministrativo);
  }

  @ApiOperation({ summary: 'Modifica los datos de un personal administrativo por ID' })
  @ApiResponse({ status: 200, description: 'personal administrativo modificado' })
  @ApiResponse({ status: 404, description: 'personal administrativo no encontrado para modificar' })
  @Put(':id')
  update(@Param('id') id: number, @Body() personalAdministrativo: PersonalAdministrativo): Promise<PersonalAdministrativo> {
    return this.personalAdministrativoService.update(id, personalAdministrativo);
  }

  @ApiOperation({ summary: 'Elimina un personal administrativo por ID' })
  @ApiResponse({ status: 200, description: 'personal administrativo Eliminado' })
  @ApiResponse({ status: 404, description: 'personal administrativo no encontrado para Eliminarlo' })
  @Delete(':id')
  delete(@Param('id') id: number): Promise<void> {
    return this.personalAdministrativoService.delete(id);
  }
}
