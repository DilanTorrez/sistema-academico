import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';

//swagger tags (descripcion y operadores de swagger)
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('usuarios')
@Controller('usuarios')
export class UsuariosController {

  constructor(private readonly usuariosService: UsuariosService) { }


  @Get()
findAll(): Promise<Usuario[]> {
  return this.usuariosService.findAll();
}

@Get(':id')
findOne(@Param('id') id: number): Promise<Usuario> {
  return this.usuariosService.findOne(id);
}

@Post()
create(@Body() usuario: Usuario): Promise<Usuario> {
  return this.usuariosService.create(usuario);
}

@Put(':id')
update(@Param('id') id: number, @Body() usuario: Usuario): Promise<Usuario> {
  return this.usuariosService.update(id, usuario);
}

@Delete(':id')
delete(@Param('id') id: number): Promise<void> {
  return this.usuariosService.delete(id);
}
}
