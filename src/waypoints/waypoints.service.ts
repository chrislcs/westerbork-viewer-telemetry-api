import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Waypoint } from './waypoint.entity';
import { WaypointDto } from './waypoint.dto';

@Injectable()
export class WaypointsService {
  constructor(
    @InjectRepository(Waypoint)
    private readonly waypointsRepository: Repository<Waypoint>,
  ) {}

  async createOrUpdate(waypointDto: WaypointDto): Promise<Waypoint> {
    let waypointEntity: Waypoint | null = null;
    if (waypointDto.id) {
      waypointEntity = await this.waypointsRepository.findOneBy({
        id: waypointDto.id,
      });
      Object.assign(waypointEntity, waypointDto);
    } else {
      waypointEntity = this.waypointsRepository.create(waypointDto);
    }

    if (!waypointEntity) throw new NotFoundException();

    return this.waypointsRepository.save(waypointEntity);
  }

  findBySessionId(sessionId: string): Promise<Waypoint[]> {
    return this.waypointsRepository.findBy({ sessionId });
  }
}
