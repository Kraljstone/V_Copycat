import { Module } from '@nestjs/common';
import { AutomobilesController } from './automobiles.controller';
import { AutomobileAd } from './entities/automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { createRepositoryProvider } from 'src/utils/generic-providers';
import { DatabaseModule } from '../../database/database.module';
import { Services } from 'src/utils/constants';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { AutomobileLatestAdsView } from './entities/automobile-latest-ads.view.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [AutomobilesController],
  providers: [
    {
      provide: Services.AUTOMOBILE_ADS,
      useClass: AutomobilesService,
    },
    createRepositoryProvider<AutomobileAd>(AutomobileAd, Services.AUTOMOBILE_ADS_REPOSITORY),
    createRepositoryProvider<Sponsored>(Sponsored, Services.SPONSORED_REPOSITORY),
    createRepositoryProvider<AutomobileLatestAdsView>(
      AutomobileLatestAdsView,
      Services.AUTOMOBILE_LATEST_ADS_VIEW_REPOSITORY,
    ),
  ],
})
export class AutomobilesModule {}
