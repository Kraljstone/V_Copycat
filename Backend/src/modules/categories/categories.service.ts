import { Injectable, Logger } from '@nestjs/common';
import { ICategoriesService } from './categories';
import { CfgCategory } from './entities/category.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoriesService implements ICategoriesService {
  logger = new Logger(CategoriesService.name);
  constructor(
    @InjectRepository(CfgCategory)
    private categoriesRepository: Repository<CfgCategory>,
  ) {}

  getCategories() {
    this.logger.log(this.categoriesRepository.find());
    return this.categoriesRepository.find();
  }
}
