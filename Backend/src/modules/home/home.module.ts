import { Module } from '@nestjs/common';

import { HomeService } from './home.service';
import { HomeController } from './home.controller';
import { HomepageLatestAdsView } from './entities/home.entity';
import { Services } from 'src/utils/constants';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([HomepageLatestAdsView])],
  controllers: [HomeController],
  providers: [
    {
      provide: Services.HOME_SERVICE,
      useClass: HomeService,
    },
  ],
})
export class HomeModule {}
