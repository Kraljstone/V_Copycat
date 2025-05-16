import { Module } from '@nestjs/common';
import { LocationService } from './locations.service';
import { LocationController } from './locations.controller';
import { Services } from 'src/utils/constants';
import { State, City } from './entities/location.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([State, City])],
  controllers: [LocationController],
  providers: [
    {
      provide: Services.LOCATION_SERVICE,
      useClass: LocationService,
    },
  ],
})
export class LocationModule {}
