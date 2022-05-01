import { Injectable, NotFoundException } from '@nestjs/common';
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

  async createOrUpdate(placeDto: PlaceDto): Promise<Place> {
    let placeEntity: Place | null = null;
    if (placeDto.id) {
      placeEntity = await this.placesRepository.findOneBy({ id: placeDto.id });
      Object.assign(placeEntity, placeDto);
    } else {
      placeEntity = this.placesRepository.create(placeDto);
    }

    if (!placeEntity) throw new NotFoundException();

    return this.placesRepository.save(placeEntity);
  }

  findBySessionId(sessionId: string): Promise<Place[]> {
    return this.placesRepository.findBy({ sessionId });
  }
}
