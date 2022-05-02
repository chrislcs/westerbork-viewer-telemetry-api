import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { PagesService } from './pages.service';
import { PageDto } from './page.dto';
import { Page } from './page.entity';
import { UuidSessionIdParamsDto } from '../shared/dto/uuid-params.dto';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  createOrUpdate(@Body() pageDto: PageDto): Promise<Page> {
    return this.pagesService.createOrUpdate(pageDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParamsDto): Promise<Page[]> {
    return this.pagesService.findBySessionId(params.sessionId);
  }
}
