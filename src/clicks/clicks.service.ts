import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Click } from './click.entity';
import { CreateClickDto } from './dto/create-click.dto';

@Injectable()
export class ClicksService {
  constructor(
    @InjectRepository(Click)
    private readonly clicksRepository: Repository<Click>,
  ) {}

  create(createClickDto: CreateClickDto): Promise<Click> {
    return this.clicksRepository.save(createClickDto);
  }

  findBySessionId(sessionId: string): Promise<Click[]> {
    return this.clicksRepository.findBy({ sessionId });
  }
}
