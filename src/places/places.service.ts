import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Place } from './place.entity';
import { PlaceDto } from './place.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectRepository(Place)
    private readonly placesRepository: Repository<Place>,
  ) {}

  createOrUpdate(placeDto: PlaceDto): Promise<Partial<Place>> {
    return this.placesRepository.save(placeDto);
  }

  findBySessionId(sessionId: string): Promise<Place[]> {
    return this.placesRepository.findBy({ sessionId });
  }
}
