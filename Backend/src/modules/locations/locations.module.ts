import { Module } from '@nestjs/common';
import { LocationService } from './locations.service';
import { LocationController } from './locations.controller';
import { DatabaseModule } from '../../database/database.module';
import { Services } from 'src/utils/constants';
import { createRepositoryProvider } from 'src/utils/generic-providers';
import { State, City } from './entities/location.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [LocationController],
  providers: [
    {
      provide: Services.LOCATION_SERVICE,
      useClass: LocationService,
    },
    createRepositoryProvider<State>(State, Services.STATE_REPOSITORY),
    createRepositoryProvider<City>(City, Services.CITY_REPOSITORY),
  ],
})
export class LocationModule {}
