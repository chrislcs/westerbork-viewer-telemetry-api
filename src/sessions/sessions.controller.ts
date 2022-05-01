import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

import { SessionsService } from './sessions.service';
import { SessionDto } from './session.dto';
import { Session } from './session.entity';
import { UuidIdParams } from '../shared/validators/uuid-params.validator';
import { SessionsQuery } from './sessions-query.validator';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  createOrUpdate(@Body() sessionDto: SessionDto): Promise<Partial<Session>> {
    return this.sessionsService.createOrUpdate(sessionDto);
  }

  @ApiQuery({
    name: 'offset',
    required: false,
    type: Number,
    description: 'Default: 0',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Default: 20',
  })
  @ApiQuery({ name: 'startDateTime', required: false, type: Date })
  @ApiQuery({ name: 'endDateTime', required: false, type: Date })
  @ApiQuery({ name: 'onPremise', required: false, type: Boolean })
  @ApiQuery({ name: 'valid', required: false, type: Boolean })
  @Get()
  findAll(@Query() query: SessionsQuery): Promise<Session[]> {
    return this.sessionsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param() params: UuidIdParams): Promise<Session> {
    return this.sessionsService.findOne(params.id);
  }
}
