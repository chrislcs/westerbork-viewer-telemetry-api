import { IsBoolean, IsOptional } from 'class-validator';

export class CreateSessionDto {
  @IsOptional()
  @IsBoolean()
  onPremise?: boolean;
}
