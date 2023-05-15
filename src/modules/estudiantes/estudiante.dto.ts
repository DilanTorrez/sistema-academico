export class CreateEstudianteDto {
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    telefono?: string;
  }
  
  export class UpdateEstudianteDto {
    nombre?: string;
    apellido?: string;
    email?: string;
    fechaNacimiento?: Date;
    telefono?: string;
  }
  