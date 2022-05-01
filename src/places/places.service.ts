import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Place } from './place.entity';
import { PlaceDto } from './place.dto';
import { createOrUpdate } from '../shared/utils/orm';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
  ) {}

  async createOrUpdate(placeDto: PlaceDto): Promise<Place> {
    return createOrUpdate<Place>(this.placesRepository, placeDto);
  }

  findBySessionId(sessionId: string): Promise<Place[]> {
    return this.placesRepository.findBy({ sessionId });
  }
}
