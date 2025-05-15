import { Controller, Get, Inject } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { ApiTags } from '@nestjs/swagger';
import { ApiLocationDocs } from './docs/location.docs';

@ApiTags(SwaggerTags.API.TAGS.LOCATIONS)
@Controller(Routes.LOCATIONS)
export class LocationController {
  constructor(
    @Inject(Services.LOCATION_SERVICE)
    private readonly locationService: LocationService,
  ) {}

  @ApiLocationDocs()
  @Get()
  async getLocation() {
    return this.locationService.getLocation();
  }
}
