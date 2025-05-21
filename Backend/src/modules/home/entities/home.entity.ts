import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class HomepageLatestAdsView {
  @PrimaryColumn({ name: 'adId' })
  adId: number;

  @Column()
  slug: string;

  @Column()
  title: string;

  @Column()
  price: string;

  @Column({ name: 'postedAt' })
  postedAt: Date;

  @Column({ name: 'categoryName' })
  categoryName: string;

  @Column({ name: 'categoryId' })
  categoryId: number;

  @Column({ name: 'sellerName' })
  sellerName: string;

  @Column({ name: 'sellerId' })
  sellerId: number;

  @Column({ name: 'sellerImageUrl' })
  sellerImageUrl: string;

  @Column()
  location: string;

  @Column({ name: 'viewCount' })
  viewCount: number;

  @Column({ name: 'imageUrl' })
  imageUrl: string;

  @Column({ name: 'pictureCount' })
  pictureCount: number;

  @Column()
  sold: boolean;
}
