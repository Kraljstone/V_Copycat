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
    const latestAds = await this.homepageLatestAdsViewRepository
      .createQueryBuilder('ad')
      .select([
        'a.auto_ad_id AS "adId"',
        'a.slug',
        'a.title',
        "COALESCE(CAST(a.price AS VARCHAR), 'undetermined') AS price",
        'a.create_datetime AS "postedAt"',
        'cat.category_key AS "categoryName"',
        'cat.automobile_cat_id AS "categoryId"',
        'u.fullname AS "sellerName"',
        'u.user_id AS "sellerId"',
        'u.profile_image_url AS "sellerImageUrl"',
        'city.city_key AS location',
        '(SELECT COUNT(*) FROM trn_user_views v WHERE v.ad_id = a.auto_ad_id) AS "viewCount"',
        '(SELECT image_url FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id ORDER BY i.order_number LIMIT 1) AS "imageUrl"',
        '(SELECT COUNT(*) FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id) AS "pictureCount"',
        'a.is_sold AS sold',
      ])
      .from('trn_automobile_ads', 'a')
      .leftJoin('users', 'u', 'u.user_id = a.user_id')
      .leftJoin('cfg_automobile_categories', 'cat', 'cat.automobile_cat_id = a.category_id')
      .leftJoin('cfg_cities', 'city', 'city.id = a.city_id')
      .where('a.is_live = TRUE')
      .orderBy('a.create_datetime', 'DESC')
      .take(10)
      .getRawMany();

    return latestAds;
  }
}
