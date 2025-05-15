import { Controller, Get, Inject } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CityResponseDto } from './dto/location-response.dto';

@ApiTags(SwaggerTags.API.TAGS.LOCATIONS)
@Controller(Routes.LOCATIONS)
export class LocationController {
  constructor(
    @Inject(Services.LOCATION_SERVICE)
    private readonly locationService: LocationService,
  ) {}

  @Get()
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.GET_LOCATIONS })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.OPERATIONS_DESCRIPTION.GET_LOCATIONS,
    type: [CityResponseDto],
  })
  async getLocation() {
    return this.locationService.getLocation();
  }
}
