import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createOrUpdate(pageDto: PageDto): Promise<Page> {
    let pageEntity: Page | null = null;
    if (pageDto.id) {
      pageEntity = await this.pagesRepository.findOneBy({ id: pageDto.id });
      Object.assign(pageEntity, pageDto);
    } else {
      pageEntity = this.pagesRepository.create(pageDto);
    }

    if (!pageEntity) throw new NotFoundException();

    return this.pagesRepository.save(pageEntity);
  }

  findBySessionId(sessionId: string): Promise<Page[]> {
    return this.pagesRepository.findBy({ sessionId });
  }
}
