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
import { Layer } from '../shared/types/layer.enum';
import { Narrative } from '../shared/types/narrative.enum';

@Entity({ name: 'pages' })
export class Page {
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiHideProperty()
  @ManyToOne(() => Session, (session) => session.pages)
  @JoinColumn({ name: 'session_id' })
  session!: Session;

  @Index()
  @Column({ type: 'uuid' })
  sessionId!: string;

  @Column({ type: 'real' })
  time!: number;

  @Column({ type: 'real', default: 0 })
  duration = 0;

  @Column({
    type: 'enum',
    enum: Room,
  })
  room!: Room;

  @Column({
    type: 'enum',
    enum: Layer,
  })
  layer!: Layer;

  @Column({
    type: 'enum',
    enum: Narrative,
  })
  narrative!: Narrative;

  @Column({ type: 'boolean', default: false })
  completed = false;
}
