import { Injectable, NotFoundException } from '@nestjs/common';
import { AutomobileAds } from './entities/automobile.entity';
import { Repository } from 'typeorm';
import { IAutomobilesService } from './automobiles';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessages } from 'src/utils/error-messages';

@Injectable()
export class AutomobilesService implements IAutomobilesService {
  constructor(
    @InjectRepository(AutomobileAds)
    private automobileRepository: Repository<AutomobileAds>,

    @InjectRepository(Sponsored)
    private automobileAdRepository: Repository<Sponsored>,
  ) {}

  async getLatestAutomobiles(page: number) {
    const automobiles = await this.automobileRepository
      .createQueryBuilder('ad')
      .leftJoin(
        'cfg_automobile_categories',
        'category',
        'category.automobile_cat_id = ad.category_id',
      )
      .leftJoin('users', 'user', 'user.user_id = ad.user_id')
      .leftJoin('trn_automobile_ad_images', 'images', 'images.ad_id = ad.auto_ad_id')
      .leftJoin('trn_user_views', 'views', 'views.ad_id = ad.auto_ad_id')
      .select([
        'ad.auto_ad_id as id',
        'ad.category_id as categoryId',
        'category.category_key as categoryName',
        'category.category_key as subcategoryName',
        'ad.user_id as sellerId',
        'user.fullname as sellerName',
        'user.username as phoneNumber',
        'ad.slug',
        'user.profile_image_url as sellerImageUrl',
        'ad.city_id as location',
        'COUNT(DISTINCT views.user_view_id) as viewCount',
        'MIN(images.image_url) as imageUrl',
        'COUNT(images.id) as pictureCount',
        'ad.is_sold as sold',
        'ad.title',
        'ad.price',
        'ad.create_datetime as postedAt',
        'ad.create_datetime as postedTimeAgo',
        'ad.create_datetime as postedTimeAgoString',
      ])
      .orderBy('ad.create_datetime', 'DESC')
      .groupBy('ad.auto_ad_id')
      .addGroupBy('category.category_key')
      .addGroupBy('user.fullname')
      .addGroupBy('user.username')
      .addGroupBy('user.profile_image_url')
      .take(30)
      .skip((page - 1) * 30)
      .getRawMany();

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
