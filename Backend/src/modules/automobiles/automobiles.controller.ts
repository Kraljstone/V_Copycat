import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { IAutomobilesService } from './automobiles';
import { ApiTags } from '@nestjs/swagger';
import { GetLatestAutomobilesDto } from './dto/get-latest-automobiles.dto';

import {
  ApiLatestAutomobilesDocs,
  ApiAutomobileAdDocs,
  ApiSponsoredAdsDocs,
} from './docs/automobiles.docs';
@ApiTags(SwaggerTags.API.TAGS.AUTOMOBILES)
@Controller(Routes.AUTOMOBILE.ROUTE)
export class AutomobilesController {
  constructor(
    @Inject(Services.AUTOMOBILE_ADS)
    private readonly automobilesService: IAutomobilesService,
  ) {}

  @ApiLatestAutomobilesDocs()
  @Get(Routes.AUTOMOBILE.LATEST)
  async getLatestAutomobiles(@Query() query: GetLatestAutomobilesDto) {
    return this.automobilesService.getLatestAutomobiles(query.page);
  }

  @ApiAutomobileAdDocs()
  @Get(Routes.AUTOMOBILE.AD)
  async getAutomobileAd(@Param('slug') slug: string) {
    return this.automobilesService.getAutomobileAd(slug);
  }

  @ApiSponsoredAdsDocs()
  @Get(Routes.AUTOMOBILE.SPONSORED)
  async getSponsoredAds() {
    return this.automobilesService.getSponsoredAds();
  }
}
