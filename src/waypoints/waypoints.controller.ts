import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';

import { WaypointsService } from './waypoints.service';
import { CreateWaypointDto } from './dto/create-waypoint.dto';
import { UpdateWaypointDto } from './dto/update-waypoint.dto';
import { UuidParams } from '../shared/validators/uuid-params.validator';

@Controller('waypoints')
export class WaypointsController {
  constructor(private readonly waypointsService: WaypointsService) {}

  @Post()
  create(@Body() createWaypointDto: CreateWaypointDto) {
    return this.waypointsService.create(createWaypointDto);
  }

  @Get(':id')
  findBySessionId(@Param() params: UuidParams) {
    return this.waypointsService.findBySessionId(params.id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWaypointDto: UpdateWaypointDto,
  ) {
    return this.waypointsService.update(+id, updateWaypointDto);
  }
}
