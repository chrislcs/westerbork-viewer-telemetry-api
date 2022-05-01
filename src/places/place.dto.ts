import { IsEnum, IsInt, IsNumber, IsOptional, IsUUID } from 'class-validator';

import { Room } from '../shared/types/room.enum';

export class PlaceDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsUUID()
  sessionId?: string;

  @IsOptional()
  @IsEnum(Room)
  room?: Room;

  @IsOptional()
  @IsNumber()
  time?: number;

  @IsOptional()
  @IsNumber()
  duration?: number;
}
