import { ViewEntity, ViewColumn, DataSource } from 'typeorm';
import { AutomobileAds } from './automobile.entity';
import { AutomobileCategory } from './automobile.entity';
import { User } from '../../../auth/entities/auth.entity';
import { AutomobileAdImage } from './automobile.entity';
import { UserView } from './automobile.entity';
import { Tables } from '../../../utils/constants';

@ViewEntity({
  name: Tables.AUTOMOBILE_ADS.VIEWS.NAME,
  materialized: true,
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select([
        'ad.auto_ad_id as "id"',
        'ad.category_id as "categoryId"',
        'category.category_key as "categoryName"',
        'category.category_key as "subcategoryName"',
        'ad.user_id as "sellerId"',
        'user.fullname as "sellerName"',
        'user.username as "phoneNumber"',
        'ad.slug as "slug"',
        'user.profile_image_url as "sellerImageUrl"',
        'ad.city_id as "location"',
        'COUNT(DISTINCT views.user_view_id) as "viewCount"',
        'MIN(images.image_url) as "imageUrl"',
        'COUNT(images.id) as "pictureCount"',
        'ad.is_sold as "sold"',
        'ad.title as "title"',
        'ad.price as "price"',
        'ad.create_datetime as "postedAt"',
        'ad.create_datetime as "postedTimeAgo"',
        'ad.create_datetime as "postedTimeAgoString"',
      ])
      .from(AutomobileAds, 'ad')
      .leftJoin(AutomobileCategory, 'category', 'category.automobile_cat_id = ad.category_id')
      .leftJoin(User, 'user', 'user.user_id = ad.user_id')
      .leftJoin(AutomobileAdImage, 'images', 'images.ad_id = ad.auto_ad_id')
      .leftJoin(UserView, 'views', 'views.ad_id = ad.auto_ad_id')
      .groupBy('ad.auto_ad_id')
      .addGroupBy('category.category_key')
      .addGroupBy('user.fullname')
      .addGroupBy('user.username')
      .addGroupBy('user.profile_image_url')
      .addGroupBy('ad.slug')
      .addGroupBy('ad.title')
      .addGroupBy('ad.price')
      .addGroupBy('ad.create_datetime')
      .addGroupBy('ad.is_sold'),
})
export class AutomobileAdsView {
  @ViewColumn()
  id: number;

  @ViewColumn()
  categoryId: number;

  @ViewColumn()
  categoryName: string;

  @ViewColumn()
  subcategoryName: string;

  @ViewColumn()
  sellerId: number;

  @ViewColumn()
  sellerName: string;

  @ViewColumn()
  phoneNumber: string;

  @ViewColumn()
  slug: string;

  @ViewColumn()
  sellerImageUrl: string;

  @ViewColumn()
  location: number;

  @ViewColumn()
  viewCount: number;

  @ViewColumn()
  imageUrl: string;

  @ViewColumn()
  pictureCount: number;

  @ViewColumn()
  sold: boolean;

  @ViewColumn()
  title: string;

  @ViewColumn()
  price: number;

  @ViewColumn()
  postedAt: Date;

  @ViewColumn()
  postedTimeAgo: Date;

  @ViewColumn()
  postedTimeAgoString: Date;
}
