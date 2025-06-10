import { CfgCategory } from './entities/category.entity';

export interface ICategoriesService {
  getCategories(): Promise<CfgCategory[]>;
}
