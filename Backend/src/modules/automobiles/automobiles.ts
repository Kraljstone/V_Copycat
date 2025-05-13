import { AutomobileAd } from './entities/automobile.entity';

export interface IAutomobilesService {
  getLatestAutomobiles(page: number): Promise<AutomobileAd[]>;
  getAutomobileAd(slug: string): Promise<AutomobileAd>;
}
