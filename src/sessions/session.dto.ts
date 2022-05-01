import { IsBoolean, IsOptional, IsUUID } from 'class-validator';

export class SessionDto {
  @IsOptional()
  @IsUUID()
  id?: string;

  @IsOptional()
  @IsBoolean()
  onPremise?: boolean;

  @IsOptional()
  @IsBoolean()
  valid?: boolean;
}
