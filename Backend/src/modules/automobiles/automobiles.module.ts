import { Module } from '@nestjs/common';
import { AutomobilesController } from './automobiles.controller';
import { AutomobileAds, AutomobileAdAttribute } from './entities/automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { Services } from 'src/utils/constants';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomobileAdsView } from 'src/modules/automobiles/entities/automobile-ads.view.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AutomobileAds, AutomobileAdAttribute, Sponsored, AutomobileAdsView]),
  ],
  controllers: [AutomobilesController],
  providers: [
    {
      provide: Services.AUTOMOBILE_ADS,
      useClass: AutomobilesService,
    },
  ],
})
export class AutomobilesModule {}
