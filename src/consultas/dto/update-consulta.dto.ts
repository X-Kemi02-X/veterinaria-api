import { IsString, IsNumber, IsOptional, IsDate } from 'class-validator';

export class UpdateConsultaDto {
  @IsOptional()
  @IsString()
  nombreMascota?: string;

  @IsOptional()
  @IsString()
  especie?: string;

  @IsOptional()
  @IsNumber()
  edad?: number;

  @IsOptional()
  @IsString()
  nombreDueno?: string;

  @IsOptional()
  @IsString()
  telefonoContacto?: string;

  @IsOptional()
  @IsDate()
  fechaConsulta?: Date;

  @IsOptional()
  @IsString()
  motivoConsulta?: string;

  @IsOptional()
  @IsNumber()
  costoConsulta?: number;

  @IsOptional()
  @IsString()
  estado?: string;
}
