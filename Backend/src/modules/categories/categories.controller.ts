import { Controller, Get, Inject } from '@nestjs/common';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { ICategoriesService } from './categories';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CategoryResponseDto } from './dto/category-response.dto';

@ApiTags(SwaggerTags.API.TAGS.CATEGORIES)
@Controller(Routes.CATEGORIES)
export class CategoriesController {
  constructor(
    @Inject(Services.CFG_CATEGORIES)
    private readonly categoriesService: ICategoriesService,
  ) {}

  @Get()
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_CATEGORIES })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_CATEGORIES,
    type: [CategoryResponseDto],
  })
  getCategories() {
    return this.categoriesService.getCategories();
  }
}
