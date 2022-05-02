import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { PlacesService } from './places.service';
import { PlaceDto } from './place.dto';
import { Place } from './place.entity';
import { UuidSessionIdParamsDto } from '../shared/dto/uuid-params.dto';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  createOrUpdate(@Body() placeDto: PlaceDto): Promise<Place> {
    return this.placesService.createOrUpdate(placeDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParamsDto): Promise<Place[]> {
    return this.placesService.findBySessionId(params.sessionId);
  }
}
