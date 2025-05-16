import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { AutomobileAd } from './entities/automobile.entity';
import { Repository } from 'typeorm';
import { IAutomobilesService } from './automobiles';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { AutomobileLatestAdsView } from './entities/automobile-latest-ads.view.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AutomobilesService implements IAutomobilesService {
  constructor(
    @InjectRepository(AutomobileAd)
    private automobileAdRepository: Repository<AutomobileAd>,

    @InjectRepository(Sponsored)
    private sponsoredRepository: Repository<Sponsored>,

    @InjectRepository(AutomobileLatestAdsView)
    private automobileLatestAdsViewRepository: Repository<AutomobileLatestAdsView>,
  ) {}

  async getLatestAutomobiles(page: number) {
    const automobiles = await this.automobileLatestAdsViewRepository.find({
      order: {
        postedAt: 'DESC',
      },
      take: 30,
      skip: (page - 1) * 30,
    });
    return automobiles;
  }

  async getAutomobileAd(slug: string) {
    const automobile = await this.automobileAdRepository.findOne({
      where: { slug },
    });
    if (!automobile) {
      throw new NotFoundException('Automobile ad not found');
    }
    return automobile;
  }

  async getSponsoredAds(): Promise<Sponsored[]> {
    const sponsoredAds = await this.sponsoredRepository.find({
      where: {
        isActive: true,
      },
    });
    return sponsoredAds;
  }
}
