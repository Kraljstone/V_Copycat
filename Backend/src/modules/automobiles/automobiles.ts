import { AutomobileAds } from './entities/automobile.entity';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { AutomobileAdsView } from 'src/modules/automobiles/entities/automobile-ads.view.entity';

export interface IAutomobilesService {
  getLatestAutomobiles(page: number): Promise<AutomobileAdsView[]>;
  getAutomobileAd(slug: string): Promise<AutomobileAds>;
  getSponsoredAds(): Promise<Sponsored[]>;
}
