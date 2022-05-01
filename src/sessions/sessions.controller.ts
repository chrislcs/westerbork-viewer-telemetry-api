import { Controller, Get, Post, Param, Patch, Body } from '@nestjs/common';

import { SessionsService } from './sessions.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { UuidIdParams } from '../shared/validators/uuid-params.validator';

@Controller('sessions')
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(createSessionDto);
  }

  @Get()
  findAll() {
    return this.sessionsService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: UuidIdParams) {
    return this.sessionsService.findOne(params.id);
  }

  @Patch(':id')
  update(
    @Param() params: UuidIdParams,
    @Body() updateSessionDto: UpdateSessionDto,
  ) {
    return this.sessionsService.update(params.id, updateSessionDto);
  }
}
