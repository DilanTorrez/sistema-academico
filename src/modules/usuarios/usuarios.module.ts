import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './usuario.entity';
import { Estudiante } from '../estudiantes/estudiante.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Usuario,Estudiante])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuariosModule {}
