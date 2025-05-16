/**
 * Response DTO for category data
 */
export class CategoryResponseDto {
  /**
   * Unique identifier of the category
   * @example 1
   */
  module_id: number;

  /**
   * Unique key identifier for the category
   * @example "automobiles"
   */
  module_key: string;

  /**
   * URL of the category image
   * @example "https://example.com/images/automobiles.jpg"
   */
  image_url?: string;

  /**
   * Description of the category
   * @example "All types of automobiles including cars, trucks, and motorcycles"
   */
  description?: string;

  /**
   * Creation date of the category
   * @example "2024-03-20T10:00:00Z"
   */
  create_datetime: Date;

  /**
   * Last update date of the category
   * @example "2024-03-20T10:00:00Z"
   */
  update_datetime?: Date;
}
