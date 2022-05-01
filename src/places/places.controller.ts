import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { PlacesService } from './places.service';
import { PlaceDto } from './place.dto';
import { Place } from './place.entity';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  createOrUpdate(@Body() placeDto: PlaceDto): Promise<Partial<Place>> {
    return this.placesService.createOrUpdate(placeDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams): Promise<Place[]> {
    return this.placesService.findBySessionId(params.sessionId);
  }
}
