import { ViewEntity, ViewColumn } from 'typeorm';

@ViewEntity({
  name: 'homepageLatestAdsView',
  expression: `
    SELECT
      a.auto_ad_id AS "adId",
      a.slug,
      a.title,
      COALESCE(CAST(a.price AS VARCHAR), 'undetermined') AS price,
      a.create_datetime AS "postedAt",
      cat.category_key AS "categoryName",
      cat.automobile_cat_id AS "categoryId",
      u.fullname AS "sellerName",
      u.user_id AS "sellerId",
      u.profile_image_url AS "sellerImageUrl",
      city.city_key AS location,
      (SELECT COUNT(*) FROM trn_user_views v WHERE v.ad_id = a.auto_ad_id) AS "viewCount",
      (SELECT image_url FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id ORDER BY i.order_number LIMIT 1) AS "imageUrl",
      (SELECT COUNT(*) FROM trn_automobile_ad_images i WHERE i.ad_id = a.auto_ad_id) AS "pictureCount",
      a.is_sold AS sold
    FROM
      trn_automobile_ads a
      LEFT JOIN users u ON a.user_id = u.user_id
      LEFT JOIN cfg_automobile_categories cat ON a.category_id = cat.automobile_cat_id
      LEFT JOIN cfg_cities city ON a.city_id = city.id
    WHERE
      a.is_live = TRUE
  `,
})
export class HomepageLatestAdsView {
  @ViewColumn({ name: 'adId' })
  adId: number;

  @ViewColumn()
  slug: string;

  @ViewColumn()
  title: string;

  @ViewColumn()
  price: string;

  @ViewColumn({ name: 'postedAt' })
  postedAt: Date;

  @ViewColumn({ name: 'categoryName' })
  categoryName: string;

  @ViewColumn({ name: 'categoryId' })
  categoryId: number;

  @ViewColumn({ name: 'sellerName' })
  sellerName: string;

  @ViewColumn({ name: 'sellerId' })
  sellerId: number;

  @ViewColumn({ name: 'sellerImageUrl' })
  sellerImageUrl: string;

  @ViewColumn()
  location: string;

  @ViewColumn({ name: 'viewCount' })
  viewCount: number;

  @ViewColumn({ name: 'imageUrl' })
  imageUrl: string;

  @ViewColumn({ name: 'pictureCount' })
  pictureCount: number;

  @ViewColumn()
  sold: boolean;
}
