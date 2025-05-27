import { Module } from '@nestjs/common';
import { RealEstateService } from './real-estate.service';
import { RealEstateController } from './real-estate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from 'src/utils/constants';
import { State } from './entities/real-estate.entity';
import { City } from './entities/real-estate.entity';
import { RealEstateCategory } from './entities/real-estate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State, City, RealEstateCategory])],
  controllers: [RealEstateController],
  providers: [
    {
      provide: Services.REAL_ESTATE_SERVICE,
      useClass: RealEstateService,
    },
  ],
})
export class RealEstateModule {}
