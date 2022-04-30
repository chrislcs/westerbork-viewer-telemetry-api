import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { Page } from './page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PagesService {
  constructor(
    @InjectRepository(Page)
    private readonly pagesRepository: Repository<Page>,
  ) {}

  create(createPageDto: CreatePageDto): Promise<Page> {
    return this.pagesRepository.save(createPageDto);
  }

  findBySessionId(sessionId: string): Promise<Page[]> {
    return this.pagesRepository.findBy({ sessionId });
  }

  update(id: number, updatePageDto: UpdatePageDto): Promise<UpdateResult> {
    return this.pagesRepository.update(id, updatePageDto);
  }
}
