export class CreateUsuarioDto {
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    telefono?: string;
  }
  
  export class UpdateUsuarioDto {
    nombre?: string;
    apellido?: string;
    email?: string;
    fechaNacimiento?: Date;
    telefono?: string;
  }
  