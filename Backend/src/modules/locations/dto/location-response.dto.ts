import { ApiProperty } from '@nestjs/swagger';

// Define StateResponseDto first
export class StateResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the state',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Unique key identifier for the state',
    example: 'new-york',
  })
  nameKey: string;
}

// Then define CityResponseDto which uses StateResponseDto
export class CityResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the city',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Unique key identifier for the city',
    example: 'new-york',
  })
  cityKey: string;

  @ApiProperty({
    description: 'State information',
    type: () => StateResponseDto,
  })
  state: StateResponseDto;
}
