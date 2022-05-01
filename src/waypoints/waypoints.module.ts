import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { WaypointsService } from './waypoints.service';
import { WaypointsController } from './waypoints.controller';
import { Waypoint } from './waypoint.entity';
import { WaypointSubscriber } from './waypoint.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Waypoint])],
  controllers: [WaypointsController],
  providers: [WaypointsService, WaypointSubscriber],
})
export class WaypointsModule {}
