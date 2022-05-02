/* eslint-disable max-classes-per-file */
import { IsUUID } from 'class-validator';

export class UuidIdParamsDto {
  @IsUUID()
  id!: string;
}

export class UuidSessionIdParamsDto {
  @IsUUID()
  sessionId!: string;
}
