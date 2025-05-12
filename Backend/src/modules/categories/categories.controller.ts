import { Controller, Get, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { ICategoriesService } from './categories';

@Controller(Routes.CATEGORIES)
export class CategoriesController {
  constructor(
    @Inject(Services.CFG_CATEGORIES)
    private readonly categoriesService: ICategoriesService,
  ) {}

  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
