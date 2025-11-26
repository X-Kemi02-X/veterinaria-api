import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Consulta } from './consulta.entity';
import { CreateConsultaDto } from './dto/create-consulta.dto';
import { UpdateConsultaDto } from './dto/update-consulta.dto';  

@Injectable()
export class ConsultasService {
  constructor(
    @InjectRepository(Consulta)
    private readonly consultaRepository: Repository<Consulta>,
  ) {}

  create(createConsultaDto: CreateConsultaDto) {
    const consulta = this.consultaRepository.create(createConsultaDto);
    return this.consultaRepository.save(consulta);
  }

  findAll() {
    return this.consultaRepository.find();
  }

  findOne(id: string) {
    return this.consultaRepository.findOne({ where: { id } });
  }

  async update(id: string, updateConsultaDto: UpdateConsultaDto) {
    const consulta = await this.consultaRepository.findOne({ where: { id } });
    if (!consulta) return null;
    Object.assign(consulta, updateConsultaDto);
    return this.consultaRepository.save(consulta);
  }

  async remove(id: string) {
    const consulta = await this.consultaRepository.findOne({ where: { id } });
    if (!consulta) return null;
    return this.consultaRepository.remove(consulta);
  }
  
  calculoPromedioCosto(costos: number[], limite: number) {
    const filtrados = costos.filter(costo => costo <= limite);
    const suma = filtrados.reduce((acc, curr) => acc + curr, 0);
    const promedio = filtrados.length > 0 ? suma / filtrados.length : 0;
    return {
      costosConsiderados: filtrados,
      sumaTotal: suma,
      promedio: promedio,
    }
  }
  contarPorEspecie(
    consultas: { nombreMascota: string; especie: string }[],
    especieFiltro: string,
  ) {
    const total = consultas.filter(c => c.especie === especieFiltro).length;
    return {
      especie: especieFiltro,
      total: total,
    };
  }
}
