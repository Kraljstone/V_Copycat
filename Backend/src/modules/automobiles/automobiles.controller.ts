import { Controller, Get, Inject, Logger, Param, Query } from '@nestjs/common';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { IAutomobilesService } from './automobiles';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery, ApiParam } from '@nestjs/swagger';
import { GetLatestAutomobilesDto } from './dto/get-latest-automobiles.dto';
import { PaginatedAutomobileResponseDto } from './dto/paginated-automobile-response.dto';
import { AutomobileResponseDto } from './dto/automobile-response.dto';

@ApiTags(SwaggerTags.API.TAGS.AUTOMOBILES)
@Controller(Routes.AUTOMOBILE.ROUTE)
export class AutomobilesController {
  constructor(
    @Inject(Services.AUTOMOBILE_ADS)
    private readonly automobilesService: IAutomobilesService,
  ) {}

  @Get(Routes.AUTOMOBILE.LATEST)
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LATEST_AUTOMOBILES })
  @ApiQuery({
    name: SwaggerTags.API.QUERY_PARAMS.PAGE,
    required: false,
    type: Number,
    description: SwaggerTags.API.QUERY_PARAMS.PAGE_DESCRIPTION,
    example: 1,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LATEST_AUTOMOBILES,
    type: PaginatedAutomobileResponseDto,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.MESSAGE.GET_LATEST_AUTOMOBILES,
  })
  async getLatestAutomobiles(@Query() query: GetLatestAutomobilesDto) {
    return this.automobilesService.getLatestAutomobiles(query.page);
  }

  @Get(Routes.AUTOMOBILE.AD)
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_AUTOMOBILE_AD })
  @ApiParam({
    name: SwaggerTags.API.PARAMS.AUTOMOBILES.SLUG,
    description: SwaggerTags.API.PARAMS.AUTOMOBILES.DESCRIPTION,
    example: SwaggerTags.API.PARAMS.AUTOMOBILES.EXAMPLE,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.OK.STATUS.MESSAGE.GET_AUTOMOBILE_AD,
    type: AutomobileResponseDto,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.NOT_FOUND.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.NOT_FOUND.STATUS.MESSAGE.GET_AUTOMOBILE_AD,
  })
  async getAutomobileAd(@Param('slug') slug: string) {
    return this.automobilesService.getAutomobileAd(slug);
  }

  @Get(Routes.AUTOMOBILE.SPONSORED)
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_SPONSORED_ADS })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_SPONSORED_ADS,
    type: [AutomobileResponseDto],
  })
  async getSponsoredAds() {
    return this.automobilesService.getSponsoredAds();
  }
}
