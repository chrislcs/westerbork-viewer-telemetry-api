import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { ClicksService } from './clicks.service';
import { ClickDto } from './click.dto';
import { Click } from './click.entity';
import { UuidSessionIdParamsDto } from '../shared/dto/uuid-params.dto';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Post()
  createOrUpdate(@Body() clickDto: ClickDto): Promise<Click> {
    return this.clicksService.createOrUpdate(clickDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParamsDto): Promise<Click[]> {
    return this.clicksService.findBySessionId(params.sessionId);
  }
}
