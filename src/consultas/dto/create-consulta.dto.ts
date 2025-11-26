import { IsString, IsNumber, IsDate } from 'class-validator';

export class CreateConsultaDto {
    @IsString()
    nombreMascota: string;

    @IsString()
    especie: string;

    @IsNumber()
    edad: number;

    @IsString()
    nombreDueno: string;

    @IsString()
    telefonoContacto: string;

    @IsDate()
    fechaConsulta: Date;

    @IsString()
    motivoConsulta: string;

    @IsNumber()
    costoConsulta: number;

    @IsString()
    estado: string;

}
