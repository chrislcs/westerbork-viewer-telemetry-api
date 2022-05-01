import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createOrUpdate(clickDto: ClickDto): Promise<Click> {
    let clickEntity: Click | null = null;
    if (clickDto.id) {
      clickEntity = await this.clicksRepository.findOneBy({ id: clickDto.id });
      Object.assign(clickEntity, clickDto);
    } else {
      clickEntity = this.clicksRepository.create(clickDto);
    }

    if (!clickEntity) throw new NotFoundException();

    return this.clicksRepository.save(clickEntity);
  }

  findBySessionId(sessionId: string): Promise<Click[]> {
    return this.clicksRepository.findBy({ sessionId });
  }
}
