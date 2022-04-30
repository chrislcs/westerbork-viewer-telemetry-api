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

  @OneToMany(() => Place, (place) => place.session)
  places!: Place[];

  @OneToMany(() => Waypoint, (waypoint) => waypoint.session)
  waypoints!: Waypoint[];

  @OneToMany(() => Page, (page) => page.session)
  pages!: Page[];

  @OneToMany(() => Click, (click) => click.session)
  clicks!: Click[];
}
