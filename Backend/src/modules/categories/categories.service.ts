import { Inject, Injectable } from '@nestjs/common';
import { ICategoriesService } from './categories';
import { CfgCategory } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService implements ICategoriesService {
  constructor(
    @InjectRepository(CfgCategory)
    private categoriesRepository: Repository<CfgCategory>,
  ) {}

  getCategories() {
    return this.categoriesRepository.find();
  }
}
