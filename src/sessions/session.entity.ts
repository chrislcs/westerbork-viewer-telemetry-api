import { ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { Place } from '../places/place.entity';
import { Waypoint } from '../waypoints/waypoint.entity';
import { Page } from '../pages/page.entity';
import { Click } from '../clicks/click.entity';

@Entity({ name: 'sessions' })
export class Session {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt!: Date;

  @Column({ type: 'boolean', default: false })
  onPremise = false;

  @Column({ type: 'boolean', default: false })
  valid = false;

  @ApiHideProperty()
  @OneToMany(() => Place, (place) => place.session)
  places!: Place[];

  @ApiHideProperty()
  @OneToMany(() => Waypoint, (waypoint) => waypoint.session)
  waypoints!: Waypoint[];

  @ApiHideProperty()
  @OneToMany(() => Page, (page) => page.session)
  pages!: Page[];

  @ApiHideProperty()
  @OneToMany(() => Click, (click) => click.session)
  clicks!: Click[];
}
