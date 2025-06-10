import { ApiProperty } from '@nestjs/swagger';

class AttributeResponseDto {
  @ApiProperty({ example: 1 })
  attributeId: number;

  @ApiProperty({ example: 100 })
  value: number;
}

class FeatureResponseDto {
  @ApiProperty({ example: 1 })
  attributeId: number;
}

export class RealEstateResponseDto {
  @ApiProperty({ example: 'Modern Apartment in City Center' })
  title: string;

  @ApiProperty({ example: 'Beautiful apartment with great views', required: false })
  description?: string;

  @ApiProperty({ example: 1 })
  subcategoryId: number;

  @ApiProperty({ example: 1 })
  cityId: number;

  @ApiProperty({ example: 250000 })
  price: number;

  @ApiProperty({ example: 120, required: false })
  areaSize?: number;

  @ApiProperty({ example: 'Near Central Park', required: false })
  closetLandmark?: string;

  @ApiProperty({ example: 10, required: false })
  streetSize?: number;

  @ApiProperty({ example: true, required: false })
  hasLandTitle?: boolean;

  @ApiProperty({ example: false, required: false })
  onCorner?: boolean;

  @ApiProperty({ example: true, required: false })
  forRent?: boolean;

  @ApiProperty({ example: false, required: false })
  forSale?: boolean;

  @ApiProperty({ type: [AttributeResponseDto], required: false })
  attributes?: AttributeResponseDto[];

  @ApiProperty({ type: [FeatureResponseDto], required: false })
  features?: FeatureResponseDto[];
}
