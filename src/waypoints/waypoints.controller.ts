import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { WaypointsService } from './waypoints.service';
import { WaypointDto } from './waypoint.dto';
import { Waypoint } from './waypoint.entity';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('waypoints')
export class WaypointsController {
  constructor(private readonly waypointsService: WaypointsService) {}

  @Post()
  createOrUpdate(@Body() waypointDto: WaypointDto): Promise<Waypoint> {
    return this.waypointsService.createOrUpdate(waypointDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams): Promise<Waypoint[]> {
    return this.waypointsService.findBySessionId(params.sessionId);
  }
}
