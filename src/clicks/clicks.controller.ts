import { Controller, Get, Post, Body, Param } from '@nestjs/common';

import { ClicksService } from './clicks.service';
import { CreateClickDto } from './dto/create-click.dto';
import { UuidParams } from '../shared/validators/uuid-params.validator';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Post()
  create(@Body() createClickDto: CreateClickDto) {
    return this.clicksService.create(createClickDto);
  }

  @Get(':id')
  findBySessionId(@Param() params: UuidParams) {
    return this.clicksService.findBySessionId(params.id);
  }
}
