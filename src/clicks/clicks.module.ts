import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClicksService } from './clicks.service';
import { ClicksController } from './clicks.controller';
import { Click } from './click.entity';
import { ClickSubscriber } from './click.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  controllers: [ClicksController],
  providers: [ClicksService, ClickSubscriber],
})
export class ClicksModule {}
