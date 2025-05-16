import { Controller, Get, Inject } from '@nestjs/common';
import { HomeService } from './home.service';
import { Routes, Services } from 'src/utils/constants';
import { ApiLatestAdsDocs } from './docs/home.docs';
@Controller(Routes.HOME.ROUTE)
export class HomeController {
  constructor(
    @Inject(Services.HOME_SERVICE)
    private readonly homeService: HomeService,
  ) {}

  @ApiLatestAdsDocs()
  @Get(Routes.HOME.LATEST)
  getLatestAds() {
    return this.homeService.getLatestAds();
  }
}
