import { Tables } from 'src/utils/constants';
import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  name: Tables.AUTOMOBILE_ADS.VIEW.TABLE,
  expression: `
    SELECT
      a.auto_ad_id AS "auto_ad_id",
      a.slug AS "slug",
      a.title AS "title",
      COALESCE(CAST(a.price AS VARCHAR), 'undetermined') AS "price",
      a.create_datetime AS "create_datetime",
      cat.category_key AS "category_key",
      cat.automobile_cat_id AS "automobile_cat_id",
      u.fullname AS "sellerName",
      u.user_id AS "sellerId",
      u.profile_image_url AS "sellerImageUrl",
      city.city_key AS "location",
      (SELECT COUNT(*) FROM trn_user_views v WHERE v.ad_id = a.auto_ad_id) AS "viewCount",
      (SELECT image_url FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id ORDER BY i.order_number LIMIT 1) AS "imageUrl",
      (SELECT COUNT(*) FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id) AS "pictureCount",
      a.is_sold AS "sold"
    FROM
      trn_automobile_ads a
      LEFT JOIN users u ON a.user_id = u.user_id
      LEFT JOIN cfg_automobile_categories cat ON a.category_id = cat.automobile_cat_id
      LEFT JOIN cfg_cities city ON a.city_id = city.id
    WHERE
      a.is_live = TRUE
  `,
})
export class AutomobileLatestAdsView {
  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.ID })
  id: number;

  @ViewColumn()
  slug: string;

  @ViewColumn()
  title: string;

  @ViewColumn()
  price: string;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.CREATE_DATETIME })
  postedAt: Date;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.CATEGORY_KEY })
  categoryName: string;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.CATEGORY_ID })
  categoryId: number;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.SELLER_NAME })
  sellerName: string;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.SELLER_ID })
  sellerId: number;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.SELLER_IMAGE_URL })
  sellerImageUrl: string;

  @ViewColumn()
  location: string;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.VIEW_COUNT })
  viewCount: number;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.IMAGE_URL })
  imageUrl: string;

  @ViewColumn({ name: Tables.AUTOMOBILE_ADS.VIEW.COLUMN.PICTURE_COUNT })
  pictureCount: number;

  @ViewColumn()
  sold: boolean;
}
