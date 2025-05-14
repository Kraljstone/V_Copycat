import { Controller, Get, Inject, Logger, Param, Query } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAutomobilesService } from './automobiles';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { GetLatestAutomobilesDto } from './dto/get-latest-automobiles.dto';
import { PaginatedAutomobileResponseDto } from './dto/paginated-automobile-response.dto';
import { AutomobileResponseDto } from './dto/automobile-response.dto';

@ApiTags('Automobiles')
@Controller(Routes.AUTOMOBILES)
export class AutomobilesController {
  constructor(
    @Inject(Services.AUTOMOBILE_ADS)
    private readonly automobilesService: IAutomobilesService,
  ) {}

  @Get(Routes.LATEST)
  @ApiOperation({ summary: 'Get latest automobile listings' })
  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number for pagination (default: 1)',
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a paginated list of latest automobile listings',
    type: PaginatedAutomobileResponseDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Bad request - Invalid page number',
  })
  async getLatestAutomobiles(@Query() query: GetLatestAutomobilesDto) {
    return this.automobilesService.getLatestAutomobiles(query.page);
  }

  @Get(Routes.AUTOMOBILE_AD)
  @ApiOperation({ summary: 'Get automobile ad details by slug' })
  @ApiParam({
    name: 'slug',
    description: 'The unique identifier (slug) of the automobile ad',
    example: 'toyota-camry-2023',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns the details of a specific automobile ad',
    type: AutomobileResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Automobile ad not found',
  })
  async getAutomobileAd(@Param('slug') slug: string) {
    return this.automobilesService.getAutomobileAd(slug);
  }
}
