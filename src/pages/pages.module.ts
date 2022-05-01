import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PagesService } from './pages.service';
import { PagesController } from './pages.controller';
import { Page } from './page.entity';
import { PageSubscriber } from './page.subscriber';

@Module({
  imports: [TypeOrmModule.forFeature([Page])],
  controllers: [PagesController],
  providers: [PagesService, PageSubscriber],
})
export class PagesModule {}
