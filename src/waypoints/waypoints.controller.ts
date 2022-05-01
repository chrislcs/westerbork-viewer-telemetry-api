import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { WaypointsService } from './waypoints.service';
import { CreateWaypointDto } from './dto/create-waypoint.dto';
import { UpdateWaypointDto } from './dto/update-waypoint.dto';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('waypoints')
export class WaypointsController {
  constructor(private readonly waypointsService: WaypointsService) {}

  @Post()
  create(@Body() createWaypointDto: CreateWaypointDto) {
    return this.waypointsService.create(createWaypointDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams) {
    return this.waypointsService.findBySessionId(params.sessionId);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWaypointDto: UpdateWaypointDto,
  ) {
    return this.waypointsService.update(+id, updateWaypointDto);
  }
}
