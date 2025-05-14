import { ApiProperty } from '@nestjs/swagger';

export class AutomobileResponseDto {
  @ApiProperty({
    description: 'Unique identifier of the automobile ad',
    example: 1,
  })
  id: number;

  @ApiProperty({
    description: 'Title of the automobile ad',
    example: '2023 Toyota Camry XSE',
  })
  title: string;

  @ApiProperty({
    description: 'URL-friendly slug for the ad',
    example: '2023-toyota-camry-xse',
  })
  slug: string;

  @ApiProperty({
    description: 'Description of the automobile',
    example: 'Excellent condition, low mileage, all features working perfectly',
    required: false,
  })
  description?: string;

  @ApiProperty({
    description: 'Price of the automobile',
    example: 25000.0,
  })
  price: number;

  @ApiProperty({
    description: 'Category ID of the automobile',
    example: 1,
  })
  categoryId: number;

  @ApiProperty({
    description: 'Make ID of the automobile',
    example: 1,
  })
  makeId: number;

  @ApiProperty({
    description: 'Model ID of the automobile',
    example: 1,
    required: false,
  })
  modelId?: number;

  @ApiProperty({
    description: 'City ID where the automobile is located',
    example: 1,
  })
  cityId: number;

  @ApiProperty({
    description: 'Creation date of the ad',
    example: '2024-03-20T10:00:00Z',
  })
  createDatetime: Date;

  @ApiProperty({
    description: 'Whether the ad is live',
    example: true,
  })
  isLive: boolean;

  @ApiProperty({
    description: 'Whether the ad is in review',
    example: false,
  })
  isInReview: boolean;

  @ApiProperty({
    description: 'Whether the ad is paid',
    example: false,
  })
  isPaid: boolean;

  @ApiProperty({
    description: 'Whether the ad is archived',
    example: false,
  })
  isArchived: boolean;
}
