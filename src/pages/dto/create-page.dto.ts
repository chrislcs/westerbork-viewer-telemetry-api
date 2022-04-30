import { IsEnum, IsNumber, IsPositive, IsUUID } from 'class-validator';

import { Room } from '../../shared/types/room.enum';
import { Layer } from '../../shared/types/layer.enum';
import { Narrative } from '../../shared/types/narrative.enum';

export class CreatePageDto {
  @IsUUID()
  sessionId!: string;

  @IsNumber()
  @IsPositive()
  time!: number;

  @IsEnum(Room)
  room!: Room;

  @IsEnum(Layer)
  layer!: Layer;

  @IsEnum(Narrative)
  narrative!: Narrative;
}
