/* eslint-disable max-classes-per-file */
import { IsUUID } from 'class-validator';

export class UuidIdParams {
  @IsUUID()
  id!: string;
}

export class UuidSessionIdParams {
  @IsUUID()
  sessionId!: string;
}
