import { ApiProperty } from '@nestjs/swagger';
import { AutomobileResponseDto } from './automobile-response.dto';

export class PaginatedAutomobileResponseDto {
  @ApiProperty({
    description: 'Array of automobile ads',
    type: [AutomobileResponseDto],
  })
  items: AutomobileResponseDto[];

  @ApiProperty({
    description: 'Total number of items',
    example: 100,
  })
  total: number;

  @ApiProperty({
    description: 'Current page number',
    example: 1,
  })
  page: number;

  @ApiProperty({
    description: 'Number of items per page',
    example: 10,
  })
  limit: number;

  @ApiProperty({
    description: 'Total number of pages',
    example: 10,
  })
  totalPages: number;
}
