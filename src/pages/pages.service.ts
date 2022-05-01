import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Page } from './page.entity';
import { PageDto } from './page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  createOrUpdate(pageDto: PageDto): Promise<Partial<Page>> {
    return this.pagesRepository.save(pageDto);
  }

  findBySessionId(sessionId: string): Promise<Page[]> {
    return this.pagesRepository.findBy({ sessionId });
  }
}
