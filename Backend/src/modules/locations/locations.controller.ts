import { Controller, Get, Inject } from '@nestjs/common';
import { LocationService } from './locations.service';
import { Routes, Services } from 'src/utils/constants';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CityResponseDto } from './dto/location-response.dto';

@ApiTags('Locations')
@Controller(Routes.LOCATIONS)
export class LocationController {
  constructor(
    @Inject(Services.LOCATION_SERVICE)
    private readonly locationService: LocationService,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get all locations' })
  @ApiResponse({
    status: 200,
    description: 'Returns a list of all cities with their respective states',
    type: [CityResponseDto],
  })
  async getLocation() {
    return this.locationService.getLocation();
  }
}
