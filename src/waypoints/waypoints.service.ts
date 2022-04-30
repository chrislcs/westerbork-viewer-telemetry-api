import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { Waypoint } from './waypoint.entity';
import { CreateWaypointDto } from './dto/create-waypoint.dto';
import { UpdateWaypointDto } from './dto/update-waypoint.dto';

@Injectable()
export class WaypointsService {
  constructor(
    @InjectRepository(Waypoint)
    private readonly waypointsRepository: Repository<Waypoint>,
  ) {}

  create(createWaypointDto: CreateWaypointDto): Promise<Waypoint> {
    return this.waypointsRepository.save(createWaypointDto);
  }

  findBySessionId(sessionId: string): Promise<Waypoint[]> {
    return this.waypointsRepository.findBy({ sessionId });
  }

  update(
    id: number,
    updateWaypointDto: UpdateWaypointDto,
  ): Promise<UpdateResult> {
    return this.waypointsRepository.update(id, updateWaypointDto);
  }
}
