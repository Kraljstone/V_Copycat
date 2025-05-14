import { Controller, Get, Inject } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { ICategoriesService } from './categories';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryResponseDto } from './dto/category-response.dto';

@ApiTags('Categories')
@Controller(Routes.CATEGORIES)
export class CategoriesController {
  constructor(
    @Inject(Services.CFG_CATEGORIES)
    private readonly categoriesService: ICategoriesService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all available categories',
    type: [CategoryResponseDto],
  })
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
