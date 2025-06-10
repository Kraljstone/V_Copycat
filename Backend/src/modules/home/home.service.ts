import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { REFRESH_MATERIALIZED_VIEW, Services } from 'src/utils/constants';
import { HomepageLatestAdsView } from './entities/home.entity';
import { IHomeService } from './home';
import { InjectRepository } from '@nestjs/typeorm';
import { Tables } from 'src/utils/constants';

@Injectable()
export class HomeService implements IHomeService {
  constructor(
    @InjectRepository(HomepageLatestAdsView)
    private homepageLatestAdsViewRepository: Repository<HomepageLatestAdsView>,
  ) {}

  async getLatestAds() {
    // Refresh the materialized view
    await this.homepageLatestAdsViewRepository.query(
      `${REFRESH_MATERIALIZED_VIEW} ${Tables.HOMEPAGE.VIEWS.LATEST_ADS}`,
    );

    const latestAds = await this.homepageLatestAdsViewRepository.find({
      order: {
        postedAt: 'DESC',
      },
      take: 10,
    });

    return latestAds;
  }
}
