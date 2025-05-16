import { HomepageLatestAdsView } from './entities/home.entity';

export interface IHomeService {
  getLatestAds(): Promise<HomepageLatestAdsView[]>;
}
