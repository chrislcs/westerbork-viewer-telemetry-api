import { IsInt, IsNumber, IsPositive, IsUUID } from 'class-validator';

export class CreateWaypointDto {
  @IsUUID()
  sessionId!: string;

  @IsInt()
  @IsPositive()
  waypointId!: number;

  @IsNumber()
  @IsPositive()
  time!: number;
}
