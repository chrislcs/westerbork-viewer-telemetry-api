import { Controller, Get, Post, Param, Body } from '@nestjs/common';

import { SessionsService } from './sessions.service';
import { SessionDto } from './session.dto';
import { Session } from './session.entity';
import { UuidIdParams } from '../shared/validators/uuid-params.validator';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  createOrUpdate(@Body() sessionDto: SessionDto): Promise<Partial<Session>> {
    return this.sessionsService.createOrUpdate(sessionDto);
  }

  @Get()
  findAll(): Promise<Session[]> {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: UuidIdParams): Promise<Session> {
    return this.sessionsService.findOne(params.id);
  }
}
