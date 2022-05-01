import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Click } from './click.entity';
import { ClickDto } from './click.dto';
import { createOrUpdate } from '../shared/utils/orm';

@Injectable()
export class ClicksService {
  constructor(
    @InjectRepository(Click)
    private readonly clicksRepository: Repository<Click>,
  ) {}

  async createOrUpdate(clickDto: ClickDto): Promise<Click> {
    return createOrUpdate<Click>(this.clicksRepository, clickDto);
  }

  findBySessionId(sessionId: string): Promise<Click[]> {
    return this.clicksRepository.findBy({ sessionId });
  }
}
