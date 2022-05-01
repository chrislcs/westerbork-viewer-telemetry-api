import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { ClicksService } from './clicks.service';
import { ClickDto } from './click.dto';
import { Click } from './click.entity';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('clicks')
export class ClicksController {
  constructor(private readonly clicksService: ClicksService) {}

  @Post()
  createOrUpdate(@Body() clickDto: ClickDto): Promise<Partial<Click>> {
    return this.clicksService.createOrUpdate(clickDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams): Promise<Click[]> {
    return this.clicksService.findBySessionId(params.sessionId);
  }
}
