import { Injectable } from '@nestjs/common';
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

  createOrUpdate(waypointDto: WaypointDto): Promise<Partial<Waypoint>> {
    return this.waypointsRepository.save(waypointDto);
  }

  findBySessionId(sessionId: string): Promise<Waypoint[]> {
    return this.waypointsRepository.findBy({ sessionId });
  }
}
