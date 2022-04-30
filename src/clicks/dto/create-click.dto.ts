import {
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
} from 'class-validator';

export class CreateClickDto {
  @IsUUID()
  sessionId!: string;

  @IsNumber()
  @IsPositive()
  time!: number;

  @IsString()
  @MaxLength(255)
  elementId!: string;
}
