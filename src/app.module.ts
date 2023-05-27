import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//swagger 
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { EstudiantesModule } from './modules/estudiantes/estudiantes.module';
import { ProfesoresModule } from './modules/profesores/profesores.module';

@Module({
  imports: [EstudiantesModule, 
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'posgresito',
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

export function setupSwagger(app) {
  const options = new DocumentBuilder()
    .setTitle('Sistema Académico API')
    .setDescription('API para el sistema académico')
    .setVersion('1.0')
    .addTag('sistema-academico')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
}
