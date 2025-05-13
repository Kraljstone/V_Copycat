import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CfgCategory } from 'src/modules/categories/entities/category.entity';
import { Tables } from 'src/utils/constants';

@Entity(Tables.AUTOMOBILE_CATEGORIES)
export class AutomobileCategory {
  @PrimaryGeneratedColumn({ name: 'automobile_cat_id' })
  id: number;

  @Column({ name: 'module_id' })
  moduleId: number;

  @ManyToOne(() => CfgCategory, module => module.automobileCategories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'module_id' })
  module: CfgCategory;

  @Column({ name: 'category_key', type: 'varchar', length: 255, unique: true })
  categoryKey: string;

  @Column({ name: 'image_url', type: 'varchar', length: 255, nullable: true })
  imageUrl?: string;

  @CreateDateColumn({ name: 'create_datetime' })
  createDateTime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileMake, make => make.category)
  makes: AutomobileMake[];
}

@Entity(Tables.AUTOMOBILE_MAKES)
export class AutomobileMake {
  @PrimaryGeneratedColumn({ name: 'automobile_make_id' })
  id: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @ManyToOne(() => AutomobileCategory, category => category.makes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'category_id' })
  category: AutomobileCategory;

  @Column({ name: 'make_key', type: 'varchar', length: 255, unique: true })
  makeKey: string;

  @CreateDateColumn({ name: 'create_datetime' })
  createDateTime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileModel, model => model.make)
  models: AutomobileModel[];
}

@Entity(Tables.AUTOMOBILE_MODELS)
export class AutomobileModel {
  @PrimaryGeneratedColumn({ name: 'automobile_model_id' })
  id: number;

  @Column({ name: 'make_id' })
  makeId: number;

  @ManyToOne(() => AutomobileMake, make => make.models, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'make_id' })
  make: AutomobileMake;

  @Column({ name: 'model_key', type: 'varchar', length: 255, unique: true })
  modelKey: string;

  @CreateDateColumn({ name: 'create_datetime' })
  createDateTime: Date;

  @Column({ name: 'update_datetime', type: 'timestamp', nullable: true })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileAd, ad => ad.modelId)
  ads: AutomobileAd[];
}

@Entity(Tables.AUTOMOBILE_ADS)
export class AutomobileAd {
  @PrimaryGeneratedColumn({ name: 'auto_ad_id' })
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 100 })
  slug: string;

  @Column({ length: 5000, nullable: true })
  description?: string;

  @Column('numeric', { precision: 10, scale: 2 })
  price: number;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ name: 'make_id' })
  makeId: number;

  @Column({ name: 'model_id', nullable: true })
  modelId?: number;

  @Column({ name: 'city_id' })
  cityId: number;

  @Column({ name: 'ad_updated', default: false })
  adUpdated: boolean;

  @CreateDateColumn({ name: 'create_datetime' })
  createDatetime: Date;

  @Column({ name: 'is_in_review', default: false })
  isInReview: boolean;

  @Column({ name: 'is_live', default: false })
  isLive: boolean;

  @Column({ name: 'is_paid', default: false })
  isPaid: boolean;

  @Column({ name: 'is_archived', default: false })
  isArchived: boolean;

  @Column({ name: 'review_start_datetime', type: 'timestamp', nullable: true })
  reviewStartDatetime?: Date;

  @Column({ name: 'review_end_datetime', type: 'timestamp', nullable: true })
  reviewEndDatetime?: Date;

  @Column({ name: 'approved_datetime', type: 'timestamp', nullable: true })
  approvedDatetime?: Date;

  @Column({ name: 'archived_datetime', type: 'timestamp', nullable: true })
  archivedDatetime?: Date;

  @Column({ name: 'live_datetime', type: 'timestamp', nullable: true })
  liveDatetime?: Date;

  @Column({ name: 'paid_datetime', type: 'timestamp', nullable: true })
  paidDatetime?: Date;

  @Column({ name: 'last_update_datetime', type: 'timestamp', nullable: true })
  lastUpdateDatetime?: Date;

  @Column({ name: 'is_deleted', default: false })
  isDeleted: boolean;

  @Column({ name: 'is_sold', default: false })
  isSold: boolean;

  @Column({ name: 'expired_sponsored_ad', default: false })
  expiredSponsoredAd: boolean;

  @Column({ name: 'submitted', default: false })
  submitted: boolean;

  @Column({ name: 'rejected', default: false })
  rejected: boolean;

  @Column({ name: 'change_request', default: false })
  changeRequest: boolean;

  // Relations (optional, add your entities accordingly)
  // @ManyToOne(() => User, user => user.ads, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'user_id' })
  // user: User;

  // @ManyToOne(() => AutomobileCategory, category => category.ads, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'category_id' })
  // category: AutomobileCategory;

  // @ManyToOne(() => AutomobileMake, make => make.ads, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'make_id' })
  // make: AutomobileMake;

  // @ManyToOne(() => AutomobileModel, model => model.ads, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'model_id' })
  // model: AutomobileModel;
}

@Entity(Tables.AUTOMOBILE_AD_IMAGES)
export class AutomobileAdImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id' })
  adId: number;

  @Column({ length: 255, name: 'image_url' })
  imageUrl: string;

  @Column({ name: 'is_primary', default: false })
  isPrimary: boolean;

  @Column({ name: 'order_number', nullable: true })
  orderNumber?: number;

  @CreateDateColumn({ name: 'upload_datetime' })
  uploadDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAd, ad => ad.images, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'ad_id' })
  // ad: AutomobileAd;
}

@Entity(Tables.AUTOMOBILE_ATTRIBUTES)
export class AutomobileAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'category_id' })
  categoryId: number;

  @Column({ length: 255, name: 'att_key' })
  attKey: string;

  @Column({ name: 'is_multi_choice' })
  isMultiChoice: boolean;

  @Column({ name: 'is_required' })
  isRequired: boolean;

  @CreateDateColumn({ name: 'create_datetime' })
  createDatetime: Date;

  @UpdateDateColumn({ name: 'update_datetime' })
  updateDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileCategory, category => category.attributes, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'category_id' })
  // category: AutomobileCategory;

  // @OneToMany(() => AutomobileAttributeOption, option => option.attribute)
  // options: AutomobileAttributeOption[];
}

@Entity(Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS)
export class AutomobileAttributeOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'att_id' })
  attId: number;

  @Column({ length: 255, name: 'att_option_key' })
  attOptionKey: string;

  @CreateDateColumn({ name: 'create_datetime' })
  createDatetime: Date;

  @UpdateDateColumn({ name: 'update_datetime' })
  updateDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAttribute, attribute => attribute.options, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'att_id' })
  // attribute: AutomobileAttribute;
}

@Entity(Tables.AUTOMOBILE_AD_ATTRIBUTES)
export class AutomobileAdAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id' })
  adId: number;

  @Column({ name: 'att_id' })
  attId: number;

  @Column({ name: 'option_id', nullable: true })
  optionId?: number;

  @Column({ length: 255, name: 'custom_value', nullable: true })
  customValue?: string;

  @Column({ name: 'has_custom_value', default: false })
  hasCustomValue: boolean;

  @CreateDateColumn({ name: 'create_datetime' })
  createDatetime: Date;

  @UpdateDateColumn({ name: 'update_datetime' })
  updateDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAd, ad => ad.attributes, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'ad_id' })
  // ad: AutomobileAd;

  // @ManyToOne(() => AutomobileAttribute, attribute => attribute.adAttributes, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'att_id' })
  // attribute: AutomobileAttribute;

  // @ManyToOne(() => AutomobileAttributeOption, option => option.adAttributes, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'option_id' })
  // option: AutomobileAttributeOption;
}

@Entity(Tables.AUTOMOBILE_AUDIT_LOGS)
export class AutomobileAuditLog {
  @PrimaryGeneratedColumn({ name: 'auditlog_id' })
  auditlogId: number;

  @Column({ name: 'ad_id' })
  adId: number;

  @Column({ name: 'changed_field', length: 255 })
  changedField: string;

  @Column({ name: 'old_value', type: 'text', nullable: true })
  oldValue?: string;

  @Column({ name: 'new_value', type: 'text', nullable: true })
  newValue?: string;

  @Column({ name: 'is_user_action', nullable: true })
  isUserAction?: boolean;

  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @Column({ name: 'is_admin_action', nullable: true })
  isAdminAction?: boolean;

  @Column({ name: 'admin_id', nullable: true })
  adminId?: number;

  @Column({ name: 'is_system_action', nullable: true })
  isSystemAction?: boolean;

  @Column({ name: 'action_description', type: 'text', nullable: true })
  actionDescription?: string;

  @CreateDateColumn({ name: 'action_datetime' })
  actionDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAd, ad => ad.auditLogs, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'ad_id' })
  // ad: AutomobileAd;
}

@Entity(Tables.USER_VIEWS)
export class UserView {
  @PrimaryGeneratedColumn({ name: 'user_view_id' })
  userViewId: number;

  @Column({ name: 'ad_id' })
  adId: number;

  @Column({ name: 'module_id' })
  moduleId: number;

  @Column({ name: 'user_id', nullable: true })
  userId?: number;

  @CreateDateColumn({ name: 'view_datetime' })
  viewDatetime: Date;

  @Column({ name: 'ip_address', length: 50, nullable: true })
  ipAddress?: string;
}

@Entity('approved_automobile_ad_snapshots')
export class ApprovedAutomobileAdSnapshot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'ad_id' })
  adId: number;

  @Column({ name: 'snapshot_data', type: 'jsonb' })
  snapshotData: Record<string, any>;

  @CreateDateColumn({ name: 'snapshot_date' })
  snapshotDate: Date;

  @ManyToOne(() => AutomobileAd, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_id' })
  ad: AutomobileAd;
}
