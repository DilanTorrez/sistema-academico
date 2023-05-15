import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';

@Module({
  imports: [EstudiantesModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'sistema-academico',
    autoLoadEntities: true,
    synchronize: true,
  }), ProfesoresModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
