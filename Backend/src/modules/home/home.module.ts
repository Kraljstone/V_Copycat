import { Module } from '@nestjs/common';

import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { HomepageLatestAdsView } from './entities/home.entity';
import { Services } from 'src/utils/constants';
import { DatabaseModule } from 'src/database/database.module';
import { createRepositoryProvider } from 'src/utils/generic-providers';
@Module({
  imports: [DatabaseModule],
  controllers: [HomeController],
  providers: [
    HomeService,
    {
      provide: Services.HOMEPAGE_LATEST_ADS_VIEW_REPOSITORY,
      useFactory: dataSource => dataSource.getRepository(HomepageLatestAdsView),
      inject: ['DATA_SOURCE'],
    },
    createRepositoryProvider<HomepageLatestAdsView>(
      HomepageLatestAdsView,
      Services.HOMEPAGE_LATEST_ADS_VIEW_REPOSITORY,
    ),
  ],
})
export class HomeModule {}
