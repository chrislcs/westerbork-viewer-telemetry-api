import { IsEnum, IsNumber, IsPositive, IsUUID } from 'class-validator';

import { Room } from '../../shared/types/room.enum';

export class CreatePlaceDto {
  @IsUUID()
  sessionId!: string;

  @IsEnum(Room)
  room!: Room;

  @IsNumber()
  @IsPositive()
  time!: number;
}
