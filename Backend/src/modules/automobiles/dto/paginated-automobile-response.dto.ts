import { AutomobileResponseDto } from './automobile-response.dto';

/**
 * Response DTO for paginated automobile listings
 */
export class PaginatedAutomobileResponseDto {
  /**
   * Array of automobile ads
   */
  items: AutomobileResponseDto[];

  /**
   * Total number of items
   * @example 100
   */
  total: number;

  /**
   * Current page number
   * @example 1
   */
  page: number;

  /**
   * Number of items per page
   * @example 10
   */
  limit: number;

  /**
   * Total number of pages
   * @example 10
   */
  totalPages: number;
}
