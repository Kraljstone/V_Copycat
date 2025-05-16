import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Services } from 'src/utils/constants';
import { HomepageLatestAdsView } from './entities/home.entity';
import { IHomeService } from './home';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class HomeService implements IHomeService {
  constructor(
    @InjectRepository(HomepageLatestAdsView)
    private homepageLatestAdsViewRepository: Repository<HomepageLatestAdsView>,
  ) {}

  async getLatestAds() {
    const latestAds = await this.homepageLatestAdsViewRepository.find({
      order: {
        postedAt: 'DESC',
      },
      take: 10,
    });
    return latestAds;
  }
}
