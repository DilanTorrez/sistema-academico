export class CreateProfesorDto {
    nombre: string;
    apellido: string;
    email: string;
    fechaNacimiento: Date;
    telefono?: string;
  }
export class UpdateProfesorDto {
    nombre?: string;
    apellido?: string;
    email?: string;
    fechaNacimiento?: Date;
    telefono?: string;
  }
  