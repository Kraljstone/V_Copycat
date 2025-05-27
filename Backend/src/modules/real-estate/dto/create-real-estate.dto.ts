import {
  IsString,
  IsNumber,
  IsOptional,
  IsBoolean,
  IsArray,
  Min,
  MaxLength,
  ValidateNested,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';

class AttributeDto {
  @IsNumber()
  attributeId: number;

  @IsNumber()
  value: number;
}

class FeatureDto {
  @IsNumber()
  attributeId: number;
}

export class CreateRealEstateDto {
  @IsString()
  @MaxLength(100)
  title: string;

  @IsString()
  @IsOptional()
  @MaxLength(2000)
  description?: string;

  @IsNumber()
  subcategoryId: number;

  @IsNumber()
  cityId: number;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsNumber()
  @IsOptional()
  areaSize?: number;

  @IsString()
  @IsOptional()
  closetLandmark?: string;

  @IsNumber()
  @IsOptional()
  streetSize?: number;

  @IsBoolean()
  @IsOptional()
  hasLandTitle?: boolean;

  @IsBoolean()
  @IsOptional()
  onCorner?: boolean;

  @IsBoolean()
  @IsOptional()
  forRent?: boolean;

  @IsBoolean()
  @IsOptional()
  forSale?: boolean;

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => AttributeDto)
  attributes?: AttributeDto[];

  @IsArray()
  @IsOptional()
  @ValidateNested({ each: true })
  @Type(() => FeatureDto)
  features?: FeatureDto[];
}
