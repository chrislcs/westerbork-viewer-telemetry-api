import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';

import { PagesService } from './pages.service';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';
import { UuidParams } from '../shared/validators/uuid-params.validator';

@Controller('pages')
export class PagesController {
  constructor(private readonly pagesService: PagesService) {}

  @Post()
  create(@Body() createPageDto: CreatePageDto) {
    return this.pagesService.create(createPageDto);
  }

  @Get(':id')
  findBySessionId(@Param() params: UuidParams) {
    return this.pagesService.findBySessionId(params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePageDto: UpdatePageDto) {
    return this.pagesService.update(+id, updatePageDto);
  }
}
