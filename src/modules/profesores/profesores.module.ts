import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfesoresService } from './profesores.service';
import { ProfesoresController } from './profesores.controller';
import { Profesor } from './profesor.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Profesor,Usuario])],
  providers: [ProfesoresService],
  controllers: [ProfesoresController]
})
export class ProfesoresModule {}
