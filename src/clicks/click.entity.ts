import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { Session } from '../sessions/session.entity';

@Entity({ name: 'clicks' })
export class Click {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Session, (session) => session.clicks)
  @JoinColumn({ name: 'session_id' })
  session!: Session;

  @Index()
  @Column({ type: 'uuid' })
  sessionId!: string;

  @Column({ type: 'real' })
  time!: number;

  @Column({ type: 'varchar', length: 255 })
  elementId!: string;
}
