import { CfgCategory } from '../../../modules/categories/entities/category.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from '../../../auth/entities/auth.entity';
import { City } from '../../locations/entities/location.entity';

@Entity('cfg_states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name_key', type: 'varchar', length: 255, nullable: true, unique: true })
  nameKey: string;

  @Column({ name: 'create_datetime', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDatetime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDatetime: Date;

  @OneToMany(() => City, city => city.state)
  cities: City[];
}

@Entity('cfg_realestate_categories')
export class RealEstateCategory {
  @PrimaryGeneratedColumn({ name: 'real_estate_cat_id' })
  realEstateCatId: number;

  @Column({ name: 'module_id', type: 'int', nullable: false })
  moduleId: number;

  @Column({ name: 'category_key', type: 'varchar', length: 255, nullable: false, unique: true })
  categoryKey: string;

  @Column({ name: 'cat_create_datetime', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  catCreateDatetime: Date;

  @Column({ name: 'cat_last_update_datetime', type: 'timestamp', nullable: true })
  catLastUpdateDatetime: Date;

  @ManyToOne(() => CfgCategory, module => module.module_id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'module_id' })
  module: CfgCategory;
}

@Entity('cfg_real_estate_attributes')
export class RealEstateAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category_id', type: 'int', nullable: false })
  categoryId: number;

  @Column({ name: 'att_key', type: 'varchar', length: 255, nullable: false })
  attKey: string;

  @Column({ name: 'is_multi_choice', type: 'boolean', nullable: false, default: false })
  isMultiChoice: boolean;

  @Column({ name: 'is_required', type: 'boolean', nullable: false, default: false })
  isRequired: boolean;

  @Column({ name: 'is_feature', type: 'boolean', nullable: false, default: false })
  isFeature: boolean;

  @Column({ name: 'create_datetime', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDatetime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDatetime: Date;

  @ManyToOne(() => RealEstateCategory, category => category.realEstateCatId, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'category_id' })
  category: RealEstateCategory;
}

@Entity('cfg_realestate_options')
export class RealEstateOption {
  @PrimaryGeneratedColumn({ name: 'att_option_id' })
  attOptionId: number;

  @Column({ name: 'att_id', type: 'int', nullable: false })
  attId: number;

  @Column({ name: 'att_option_key', type: 'varchar', length: 255, nullable: false })
  attOptionKey: string;

  @Column({
    name: 'create_datetime',
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createDatetime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDatetime: Date;

  @ManyToOne(() => RealEstateAttribute, attribute => attribute.id, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'att_id' })
  attribute: RealEstateAttribute;
}

@Entity('trn_real_estate_ads')
export class RealEstateAd {
  @PrimaryGeneratedColumn({ name: 'estate_id' })
  estateId: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  title: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, nullable: false })
  price: number;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userId: number;

  @Column({ name: 'is_in_review', type: 'boolean', nullable: true })
  isInReview: boolean;

  @Column({ name: 'is_live', type: 'boolean', nullable: true })
  isLive: boolean;

  @Column({ name: 'is_archived', type: 'boolean', nullable: true })
  isArchived: boolean;

  @Column({ name: 'review_start_datetime', type: 'timestamp', nullable: true })
  reviewStartDatetime: Date;

  @Column({ name: 'approved_datetime', type: 'timestamp', nullable: true })
  approvedDatetime: Date;

  @Column({ name: 'archived_datetime', type: 'timestamp', nullable: true })
  archivedDatetime: Date;

  @Column({ name: 'live_datetime', type: 'timestamp', nullable: true })
  liveDatetime: Date;

  @Column({ name: 'last_update_datetime', type: 'timestamp', nullable: true })
  lastUpdateDatetime: Date;

  @Column({ name: 'area_size', type: 'decimal', precision: 10, scale: 2, nullable: true })
  areaSize: number;

  @Column({ name: 'closet_landmark', type: 'varchar', length: 255, nullable: true })
  closetLandmark: string;

  @Column({ name: 'street_size', type: 'decimal', precision: 10, scale: 2, nullable: true })
  streetSize: number;

  @Column({ name: 'has_land_title', type: 'boolean', nullable: true })
  hasLandTitle: boolean;

  @Column({ name: 'is_on_corner', type: 'boolean', nullable: true })
  isOnCorner: boolean;

  @Column({ name: 'latitude', type: 'decimal', precision: 9, scale: 6, nullable: true })
  latitude: number;

  @Column({ name: 'longitude', type: 'decimal', precision: 9, scale: 6, nullable: true })
  longitude: number;

  @Column({ name: 'city_id', type: 'int', nullable: false })
  cityId: number;

  @Column({ name: 'is_for_rent', type: 'boolean', nullable: true })
  isForRent: boolean;

  @Column({ name: 'is_for_sale', type: 'boolean', nullable: true })
  isForSale: boolean;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => City, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToMany(() => RealEstateAdAttribute, attribute => attribute.ad)
  attributes: RealEstateAdAttribute[];
}

@Entity('trn_realestate_ad_attributes')
export class RealEstateAdAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id', type: 'int', nullable: false })
  adId: number;

  @Column({ name: 'att_id', type: 'int', nullable: false })
  attId: number;

  @Column({ name: 'option_id', type: 'int', nullable: true })
  optionId: number;

  @Column({ name: 'custom_value', type: 'varchar', length: 255, nullable: true })
  customValue: string;

  @Column({ name: 'has_custom_value', type: 'boolean', nullable: false, default: false })
  hasCustomValue: boolean;

  @Column({ name: 'create_datetime', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createDatetime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDatetime: Date;

  @ManyToOne(() => RealEstateAd, ad => ad.attributes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_id' })
  ad: RealEstateAd;

  @ManyToOne(() => RealEstateAttribute, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'att_id' })
  attribute: RealEstateAttribute;

  @ManyToOne(() => RealEstateOption, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'option_id' })
  option: RealEstateOption;
}

@Entity('trn_user_fav_ads')
export class UserFavoriteAd {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id', type: 'int', nullable: false })
  adId: number;

  @Column({ name: 'module_id', type: 'int', nullable: false })
  moduleId: number;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userId: number;

  @Column({ name: 'favorite_datetime', type: 'timestamp', nullable: true })
  favoriteDatetime: Date;

  @ManyToOne(() => RealEstateAd, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_id' })
  ad: RealEstateAd;

  @ManyToOne(() => CfgCategory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'module_id' })
  module: CfgCategory;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}

@Entity('trn_user_fav_history')
export class UserFavoriteHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id', type: 'int', nullable: false })
  adId: number;

  @Column({ name: 'module_id', type: 'int', nullable: false })
  moduleId: number;

  @Column({ name: 'user_id', type: 'int', nullable: false })
  userId: number;

  @Column({ name: 'removed_datetime', type: 'timestamp', nullable: true })
  removedDatetime: Date;

  @ManyToOne(() => RealEstateAd, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_id' })
  ad: RealEstateAd;

  @ManyToOne(() => CfgCategory, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'module_id' })
  module: CfgCategory;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
