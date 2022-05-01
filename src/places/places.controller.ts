import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ApiParam } from '@nestjs/swagger';

import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { UuidSessionIdParams } from '../shared/validators/uuid-params.validator';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placesService.create(createPlaceDto);
  }

  @ApiParam({ name: 'sessionId', required: true })
  @Get(':sessionId')
  findBySessionId(@Param() params: UuidSessionIdParams) {
    return this.placesService.findBySessionId(params.sessionId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlaceDto: UpdatePlaceDto) {
    return this.placesService.update(+id, updatePlaceDto);
  }
}
