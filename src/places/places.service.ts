import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { Place } from './place.entity';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
  ) {}

  create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesRepository.save(createPlaceDto);
  }

  findBySessionId(sessionId: string): Promise<Place[]> {
    return this.placesRepository.findBy({ sessionId });
  }

  update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<UpdateResult> {
    return this.placesRepository.update(id, updatePlaceDto);
  }
}
