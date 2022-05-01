import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Page } from './page.entity';
import { PageDto } from './page.dto';
import { createOrUpdate } from '../shared/utils/orm';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  async createOrUpdate(pageDto: PageDto): Promise<Page> {
    return createOrUpdate<Page>(this.pagesRepository, pageDto);
  }

  findBySessionId(sessionId: string): Promise<Page[]> {
    return this.pagesRepository.findBy({ sessionId });
  }
}
