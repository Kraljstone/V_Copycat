import { IsString, IsNumber, IsOptional, Min, MaxLength, IsArray } from 'class-validator';

/**
 * Data Transfer Object for creating a new automobile listing
 */
export class CreateAutomobileDto {
  /**
   * Title of the automobile ad
   * @example 2023 Toyota Camry XSE
   */
  @IsString()
  @MaxLength(255)
  title: string;

  /**
   * Description of the automobile
   * @example Excellent condition, low mileage, all features working perfectly
   */
  @IsString()
  @IsOptional()
  @MaxLength(5000)
  description?: string;

  /**
   * Price of the automobile
   * @example 25000.0
   */
  @IsNumber()
  @Min(0)
  price: number;

  /**
   * Category ID of the automobile
   * @example 1
   */
  @IsNumber()
  categoryId: number;

  /**
   * Make ID of the automobile
   * @example 1
   */
  @IsNumber()
  makeId: number;

  /**
   * Model ID of the automobile
   * @example 1
   */
  @IsNumber()
  @IsOptional()
  modelId?: number;

  /**
   * City ID where the automobile is located
   * @example 1
   */
  @IsNumber()
  cityId: number;

  /**
   * Array of image URLs for the automobile
   * @example ['https://example.com/image1.jpg', 'https://example.com/image2.jpg']
   */
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
}
