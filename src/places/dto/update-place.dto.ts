import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdatePlaceDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  duration?: number;
}
