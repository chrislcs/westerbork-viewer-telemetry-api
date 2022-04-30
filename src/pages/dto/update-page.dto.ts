import { IsBoolean, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdatePageDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  duration?: number;

  @IsOptional()
  @IsBoolean()
  completed?: boolean;
}
