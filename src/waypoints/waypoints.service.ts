import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Waypoint } from './waypoint.entity';
import { WaypointDto } from './waypoint.dto';
import { createOrUpdate } from '../shared/utils/orm';

@Injectable()
export class WaypointsService {
  constructor(
    @InjectRepository(Waypoint)
    private readonly waypointsRepository: Repository<Waypoint>,
  ) {}

  async createOrUpdate(waypointDto: WaypointDto): Promise<Waypoint> {
    return createOrUpdate<Waypoint>(this.waypointsRepository, waypointDto);
  }

  findBySessionId(sessionId: string): Promise<Waypoint[]> {
    return this.waypointsRepository.findBy({ sessionId });
  }
}
