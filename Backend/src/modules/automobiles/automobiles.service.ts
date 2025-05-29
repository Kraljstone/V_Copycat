import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { AutomobileAds } from './entities/automobile.entity';
import { Repository } from 'typeorm';
import { IAutomobilesService } from './automobiles';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessages } from 'src/utils/error-messages';
import { AutomobileAdsView } from 'src/modules/automobiles/entities/automobile-ads.view.entity';
import { REFRESH_MATERIALIZED_VIEW, Tables } from 'src/utils/constants';

@Injectable()
export class AutomobilesService implements IAutomobilesService {
  constructor(
    @InjectRepository(AutomobileAds)
    private automobileRepository: Repository<AutomobileAds>,

    @InjectRepository(Sponsored)
    private automobileAdRepository: Repository<Sponsored>,

    @InjectRepository(AutomobileAdsView)
    private automobileAdsViewRepository: Repository<AutomobileAdsView>,
  ) {}

  async getLatestAutomobiles(page: number) {
    await this.automobileAdsViewRepository.query(
      `${REFRESH_MATERIALIZED_VIEW} ${Tables.AUTOMOBILE_ADS.VIEWS.NAME}`,
    );

    const automobiles = await this.automobileAdsViewRepository.find({
      order: {
        postedAt: 'DESC',
      },
      take: 30,
      skip: (page - 1) * 30,
    });

    return automobiles;
  }

  async getAutomobileAd(slug: string) {
    const automobile = await this.automobileRepository.findOne({
      where: { slug },
    });
    if (!automobile) {
      throw new NotFoundException(ErrorMessages.AUTOMOBILE.AUTOMOBILE_NOT_FOUND);
    }
    return automobile;
  }

  async getSponsoredAds(): Promise<Sponsored[]> {
    const sponsoredAds = await this.automobileAdRepository.find({
      where: {
        isActive: true,
      },
    });
    return sponsoredAds;
  }
}
