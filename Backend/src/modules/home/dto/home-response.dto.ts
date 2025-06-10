import { AutomobileResponseDto } from 'src/modules/automobiles/dto/automobile-response.dto';

/**
 * Response DTO for home page data
 */
export class HomeResponseDto {
  /**
   * Latest automobile advertisements
   * @example [
   *   {
   *     "id": 1,
   *     "title": "2023 Toyota Camry XSE",
   *     "price": 25000,
   *     "categoryName": "Sedan"
   *   }
   * ]
   */
  latestAds: AutomobileResponseDto[];
}
