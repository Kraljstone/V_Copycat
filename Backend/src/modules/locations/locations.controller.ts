import { Controller, Get, Inject } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Routes, Services } from 'src/utils/constants';

@Controller(Routes.LOCATIONS)
export class LocationController {
  constructor(
    @Inject(Services.LOCATION_SERVICE)
    private readonly locationService: LocationService,
  ) {}

  @Get()
  async getLocation() {
    return this.locationService.getLocation();
  }
}
