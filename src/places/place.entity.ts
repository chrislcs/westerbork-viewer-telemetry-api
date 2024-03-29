import { ApiHideProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Session } from '../sessions/session.entity';
import { Room } from '../shared/types/room.enum';

@Entity({ name: 'places' })
export class Place {
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiHideProperty()
  @ManyToOne(() => Session, (session) => session.places)
  @JoinColumn({ name: 'session_id' })
  session!: Session;

  @Index()
  @Column({ type: 'uuid' })
  sessionId!: string;

  @Column({
    type: 'enum',
    enum: Room,
  })
  room!: Room;

  @Column({ type: 'real' })
  time!: number;

  @Column({ type: 'real', default: 0 })
  duration = 0;
}
