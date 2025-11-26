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
}
