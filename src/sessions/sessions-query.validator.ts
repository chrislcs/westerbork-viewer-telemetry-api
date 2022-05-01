import { IsBoolean, IsInt, IsISO8601, IsOptional } from 'class-validator';
import { Type, Transform } from 'class-transformer';

import { toBoolean } from '../shared/utils/transform';

export class SessionsQuery {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  limit = 20;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  offset = 0;

  @IsOptional()
  @IsISO8601()
  startDateTime?: string;

  @IsOptional()
  @IsISO8601()
  endDateTime?: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => toBoolean(value))
  onPremise?: boolean;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => toBoolean(value))
  valid?: boolean;
}
