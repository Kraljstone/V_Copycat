import { Inject, Injectable } from '@nestjs/common';
import { ICategoriesService } from './categories';
import { CfgCategory } from './entities/category.entity';
import { Repository } from 'typeorm';
import { Services } from 'src/utils/constants';

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(
    @Inject(Services.CFG_CATEGORIES_REPOSITORY)
    private categoriesRepository: Repository<CfgCategory>,
  ) {}

  getCategories() {
    return this.categoriesRepository.find();
  }
}
