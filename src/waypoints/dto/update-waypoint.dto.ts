import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateWaypointDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  duration?: number;
}
