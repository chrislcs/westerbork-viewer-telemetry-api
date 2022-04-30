import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Session } from '../sessions/session.entity';

@Entity({ name: 'waypoints' })
export class Waypoint {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Session, (session) => session.waypoints)
  @JoinColumn({ name: 'session_id' })
  session!: Session;

  @Index()
  @Column({ type: 'uuid' })
  sessionId!: string;

  @Column({ type: 'smallint' })
  waypointId!: number;

  @Column({ type: 'real' })
  time!: number;

  @Column({ type: 'real', default: 0 })
  duration = 0;
}
