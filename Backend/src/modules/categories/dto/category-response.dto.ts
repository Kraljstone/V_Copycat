import { ApiProperty } from '@nestjs/swagger';

export class CategoryResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the category',
    example: 1,
  })
  module_id: number;

  @ApiProperty({
    description: 'Unique key identifier for the category',
    example: 'automobiles',
  })
  module_key: string;

  @ApiProperty({
    description: 'URL of the category image',
    example: 'https://example.com/images/automobiles.jpg',
    required: false,
  })
  image_url?: string;

  @ApiProperty({
    description: 'Description of the category',
    example: 'All types of automobiles including cars, trucks, and motorcycles',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Creation date of the category',
    example: '2024-03-20T10:00:00Z',
  })
  create_datetime: Date;

  @ApiProperty({
    description: 'Last update date of the category',
    example: '2024-03-20T10:00:00Z',
    required: false,
  })
  update_datetime?: Date;
}
