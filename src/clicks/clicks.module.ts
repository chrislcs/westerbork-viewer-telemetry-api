import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ClicksService } from './clicks.service';
import { ClicksController } from './clicks.controller';
import { Click } from './click.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Click])],
  controllers: [ClicksController],
  providers: [ClicksService],
})
export class ClicksModule {}
