import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { ClicksService } from './clicks.service';
import { CreateClickDto } from './dto/create-click.dto';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Post()
  create(@Body() createClickDto: CreateClickDto) {
    return this.clicksService.create(createClickDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams) {
    return this.clicksService.findBySessionId(params.sessionId);
  }
}
