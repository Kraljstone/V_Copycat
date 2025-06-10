import { IsNumber, IsOptional, Min } from 'class-validator';
import { Type } from 'class-transformer';

/**
 * DTO for getting latest automobile listings with pagination
 */
export class GetLatestAutomobilesDto {
  /**
   * Page number for pagination
   * @example 1
   * @default 1
   */
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;
}
