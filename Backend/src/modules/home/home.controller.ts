import { Controller, Get } from '@nestjs/common';
import { HomeService } from './home.service';
import { Routes, SwaggerTags } from 'src/utils/constants';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { HomeResponseDto } from './dto/home-response.dto';
@Controller(Routes.HOME.ROUTE)
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LATEST_ADS })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LATEST_ADS,
    type: HomeResponseDto,
  })
  @Get(Routes.HOME.LATEST)
  getLatestAds() {
    return this.homeService.getLatestAds();
  }
}
