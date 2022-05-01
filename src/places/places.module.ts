import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { Place } from './place.entity';
import { PlaceSubscriber } from './place.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  controllers: [PlacesController],
  providers: [PlacesService, PlaceSubscriber],
})
export class PlacesModule {}
