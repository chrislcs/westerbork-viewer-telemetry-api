import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Click } from './click.entity';
import { ClickDto } from './click.dto';

@Injectable()
export class ClicksService {
  constructor(
    @InjectRepository(Click)
    private readonly clicksRepository: Repository<Click>,
  ) {}

  createOrUpdate(clickDto: ClickDto): Promise<Partial<Click>> {
    return this.clicksRepository.save(clickDto);
  }

  findBySessionId(sessionId: string): Promise<Click[]> {
    return this.clicksRepository.findBy({ sessionId });
  }
}
