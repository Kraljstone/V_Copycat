import { Controller, Get, Inject } from '@nestjs/common';
import { HomeService } from './home.service';
import { Routes, Services } from 'src/utils/constants';
@Controller(Routes.HOME.ROUTE)
export class HomeController {
  constructor(
    @Inject(Services.HOME_SERVICE)
    private readonly homeService: HomeService,
  ) {}

  @Get(Routes.HOME.LATEST)
  getLatestAds() {
    return this.homeService.getLatestAds();
  }
}
