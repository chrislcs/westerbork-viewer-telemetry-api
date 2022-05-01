import {
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsUUID,
} from 'class-validator';

export class WaypointDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsUUID()
  sessionId?: string;

  @IsOptional()
  @IsInt()
  @IsPositive()
  waypointId?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  time?: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  duration?: number;
}
