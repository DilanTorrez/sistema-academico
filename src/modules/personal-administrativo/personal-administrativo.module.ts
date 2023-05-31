import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonalAdministrativoController } from './personal-administrativo.controller';
import { PersonalAdministrativoService } from './personal-administrativo.service';
import { PersonalAdministrativo } from './personal-administrativo.entity';
import { Usuario } from '../usuarios/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonalAdministrativo, Usuario])],
  controllers: [PersonalAdministrativoController],
  providers: [PersonalAdministrativoService],
})
export class PersonalAdministrativoModule {}
