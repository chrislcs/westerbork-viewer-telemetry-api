import {
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class ClickDto {
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
  @IsString()
  @MaxLength(255)
  elementId?: string;
}
