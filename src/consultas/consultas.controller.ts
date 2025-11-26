import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ConsultasService } from './consultas.service';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';

@Controller('consultas')   
export class ConsultasController {
  constructor(private readonly consultasService: ConsultasService) {}

  @Post()
  create(@Body() createConsultaDto: CreateConsultaDto) {
    return this.consultasService.create(createConsultaDto);
  }

  @Get()
  findAll() {
    return this.consultasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consultasService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateConsultaDto: UpdateConsultaDto) {
    return this.consultasService.update(id, updateConsultaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consultasService.remove(id);
  }
  @Post('calculo-promedio-costo')
  calculoPromedioCosto(
    @Body('costos') costos: number[],
    @Body('limite') limite: number,
   ) { return this.consultasService.calculoPromedioCosto(costos, limite);
  }
  @Post('contar-por-especie')
  contarPorEspecie(
    @Body('consultas') consultas: { nombreMascota: string; especie: string}[],
    @Body('especieFiltro') especieFiltro: string,
  ) {
    return this.consultasService.contarPorEspecie(consultas, especieFiltro);
  }

}

