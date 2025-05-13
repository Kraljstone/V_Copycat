import { Controller, Get, Inject, Logger, Param, Query } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAutomobilesService } from './automobiles';

@Controller(Routes.AUTOMOBILES)
export class AutomobilesController {
  constructor(
    @Inject(Services.AUTOMOBILE_ADS)
    private readonly automobilesService: IAutomobilesService,
  ) {}

  @Get(Routes.LATEST)
  async getLatestAutomobiles(@Query('page') page: number = 1) {
    return this.automobilesService.getLatestAutomobiles(page);
  }

  @Get(Routes.AUTOMOBILE_AD)
  async getAutomobileAd(@Param('slug') slug: string) {
    return this.automobilesService.getAutomobileAd(slug);
  }
}
