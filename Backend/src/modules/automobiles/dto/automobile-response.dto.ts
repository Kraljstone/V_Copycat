import { ApiProperty } from '@nestjs/swagger';

/**
 * Response DTO for automobile data
 */
export class AutomobileResponseDto {
  /**
   * Unique identifier of the automobile ad
   * @example 1
   */
  id: number;

  /**
   * Title of the automobile ad
   * @example 2023 Toyota Camry XSE
   */
  title: string;

  /**
   * URL-friendly slug for the ad
   * @example 2023-toyota-camry-xse
   */
  slug: string;

  /**
   * Description of the automobile
   * @example Excellent condition, low mileage, all features working perfectly
   */
  description?: string;

  /**
   * Price of the automobile
   * @example 25000.0
   */
  price: number;

  /**
   * Category ID of the automobile
   * @example 1
   */
  categoryId: number;

  /**
   * Make ID of the automobile
   * @example 1
   */
  makeId: number;

  /**
   * Model ID of the automobile
   * @example 1
   */
  modelId?: number;

  /**
   * City ID where the automobile is located
   * @example 1
   */
  cityId: number;

  /**
   * Creation date of the ad
   * @example 2024-03-20T10:00:00Z
   */
  createDatetime: Date;

  /**
   * Whether the ad is live
   * @example true
   */
  isLive: boolean;

  /**
   * Whether the ad is in review
   * @example false
   */
  isInReview: boolean;

  /**
   * Whether the ad is paid
   * @example false
   */
  isPaid: boolean;

  /**
   * Whether the ad is archived
   * @example false
   */

  isArchived: boolean;
}
