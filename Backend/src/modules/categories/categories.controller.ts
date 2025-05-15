import { Controller, Get, Inject } from '@nestjs/common';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { ICategoriesService } from './categories';
import { ApiTags } from '@nestjs/swagger';
import { ApiCategoriesDocs } from './docs/categories.docs';

@ApiTags(SwaggerTags.API.TAGS.CATEGORIES)
@Controller(Routes.CATEGORIES)
export class CategoriesController {
  constructor(
    @Inject(Services.CFG_CATEGORIES)
    private readonly categoriesService: ICategoriesService,
  ) {}

  @ApiCategoriesDocs()
  @Get()
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
