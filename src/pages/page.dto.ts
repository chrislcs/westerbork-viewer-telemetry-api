import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsUUID,
} from 'class-validator';

import { Room } from '../shared/types/room.enum';
import { Layer } from '../shared/types/layer.enum';
import { Narrative } from '../shared/types/narrative.enum';

export class PageDto {
  @IsOptional()
  @IsInt()
  id?: number;

  @IsOptional()
  @IsUUID()
  sessionId?: string;

  @IsOptional()
  @IsNumber()
  time?: number;

  @IsOptional()
  @IsEnum(Room)
  room?: Room;

  @IsOptional()
  @IsEnum(Layer)
  layer?: Layer;

  @IsOptional()
  @IsEnum(Narrative)
  narrative?: Narrative;

  @IsOptional()
  @IsNumber()
  duration?: number;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
