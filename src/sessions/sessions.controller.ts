import { Controller, Get, Post, Param, Body, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';

import { SessionsService } from './sessions.service';
import { Session } from './session.entity';
import { SessionDto } from './dto/session.dto';
import { UuidIdParamsDto } from '../shared/dto/uuid-params.dto';
import { SessionsQueryDto } from './dto/sessions-query.dto';

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
  findAll(@Query() query: SessionsQueryDto): Promise<Session[]> {
    return this.sessionsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param() params: UuidIdParamsDto): Promise<Session> {
    return this.sessionsService.findOne(params.id);
  }
}
