import { Controller, Get, Inject } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Routes, Services } from 'src/utils/constants';
import { LocationResponseDto } from './dto/location-response.dto';

@Controller(Routes.LOCATIONS)
export class LocationController {
  constructor(
    @Inject(Services.LOCATION_SERVICE)
    private readonly locationService: LocationService,
  ) {}

  @Get()
  async getLocation(): Promise<LocationResponseDto> {
    return this.locationService.getLocation();
  }
}
