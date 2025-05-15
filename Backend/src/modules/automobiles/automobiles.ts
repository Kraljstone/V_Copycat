import { AutomobileAd } from './entities/automobile.entity';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { AutomobileLatestAdsView } from './entities/automobile-latest-ads.view.entity';

export interface IAutomobilesService {
  getLatestAutomobiles(page: number): Promise<AutomobileLatestAdsView[]>;
  getAutomobileAd(slug: string): Promise<AutomobileAd>;
  getSponsoredAds(): Promise<Sponsored[]>;
}
