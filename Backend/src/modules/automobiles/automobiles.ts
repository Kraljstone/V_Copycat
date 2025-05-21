import { AutomobileAds } from './entities/automobile.entity';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';

export interface IAutomobilesService {
  getLatestAutomobiles(page: number): Promise<AutomobileAds[]>;
  getAutomobileAd(slug: string): Promise<AutomobileAds>;
  getSponsoredAds(): Promise<Sponsored[]>;
}
