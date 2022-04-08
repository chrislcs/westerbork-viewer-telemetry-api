import { Controller, Get, Post, Param } from '@nestjs/common';

import { SessionsService } from './sessions.service';
import { FindOneParams } from './validators/find-one-params.validator';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create() {
    return this.sessionsService.create();
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: FindOneParams) {
    return this.sessionsService.findOne(params.id);
  }
}
