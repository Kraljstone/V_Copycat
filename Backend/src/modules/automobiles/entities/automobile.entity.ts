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
import { CfgCategory } from '../../categories/entities/category.entity';
import { Tables } from '../../../utils/constants';

@Entity(Tables.AUTOMOBILE_CATEGORIES.TABLE)
export class AutomobileCategory {
  @PrimaryGeneratedColumn({ name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.ID })
  id: number;

  @Column({ name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.MODULE_ID })
  moduleId: number;

  @ManyToOne(() => CfgCategory, module => module.automobileCategories, { onDelete: 'CASCADE' })
  @JoinColumn({ name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.MODULE_ID })
  module: CfgCategory;

  @Column({
    name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.CATEGORY_KEY,
    type: 'varchar',
    length: 255,
    unique: true,
  })
  categoryKey: string;

  @Column({
    name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.IMAGE_URL,
    type: 'varchar',
    length: 255,
    nullable: true,
  })
  imageUrl?: string;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.CREATE_DATETIME })
  createDateTime: Date;

  @Column({
    name: Tables.AUTOMOBILE_CATEGORIES.COLUMN.UPDATE_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileMake, make => make.category)
  makes: AutomobileMake[];
}

@Entity(Tables.AUTOMOBILE_MAKES.TABLE)
export class AutomobileMake {
  @PrimaryGeneratedColumn({ name: Tables.AUTOMOBILE_MAKES.COLUMN.ID })
  id: number;

  @Column({ name: Tables.AUTOMOBILE_MAKES.COLUMN.CATEGORY_ID })
  categoryId: number;

  @ManyToOne(() => AutomobileCategory, category => category.makes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: Tables.AUTOMOBILE_MAKES.COLUMN.CATEGORY_ID })
  category: AutomobileCategory;

  @Column({
    name: Tables.AUTOMOBILE_MAKES.COLUMN.MAKE_KEY,
    type: 'varchar',
    length: 255,
    unique: true,
  })
  makeKey: string;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_MAKES.COLUMN.CREATE_DATETIME })
  createDateTime: Date;

  @Column({
    name: Tables.AUTOMOBILE_MAKES.COLUMN.UPDATE_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileModel, model => model.make)
  models: AutomobileModel[];
}

@Entity(Tables.AUTOMOBILE_MODELS.TABLE)
export class AutomobileModel {
  @PrimaryGeneratedColumn({ name: Tables.AUTOMOBILE_MODELS.COLUMN.ID })
  id: number;

  @Column({ name: Tables.AUTOMOBILE_MODELS.COLUMN.MAKE_ID })
  makeId: number;

  @ManyToOne(() => AutomobileMake, make => make.models, { onDelete: 'CASCADE' })
  @JoinColumn({ name: Tables.AUTOMOBILE_MODELS.COLUMN.MAKE_ID })
  make: AutomobileMake;

  @Column({
    name: Tables.AUTOMOBILE_MODELS.COLUMN.MODEL_KEY,
    type: 'varchar',
    length: 255,
    unique: true,
  })
  modelKey: string;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_MODELS.COLUMN.CREATE_DATETIME })
  createDateTime: Date;

  @Column({
    name: Tables.AUTOMOBILE_MODELS.COLUMN.UPDATE_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  updateDateTime?: Date;

  @OneToMany(() => AutomobileAds, ad => ad.modelId)
  ads: AutomobileAds[];
}

@Entity(Tables.AUTOMOBILE_ADS.TABLE)
export class AutomobileAds {
  @PrimaryGeneratedColumn({ name: Tables.AUTOMOBILE_ADS.COLUMN.ID })
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column({ length: 100 })
  slug: string;

  @Column({ length: 5000, nullable: true })
  description?: string;

  @Column('numeric', { precision: 10, scale: 2 })
  price: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.USER_ID })
  userId: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.CATEGORY_ID })
  categoryId: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.MAKE_ID })
  makeId: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.MODEL_ID, nullable: true })
  modelId?: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.CITY_ID })
  cityId: number;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.AD_UPDATED, default: false })
  adUpdated: boolean;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_ADS.COLUMN.CREATE_DATETIME })
  createDatetime: Date;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_IN_REVIEW, default: false })
  isInReview: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_LIVE, default: false })
  isLive: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_PAID, default: false })
  isPaid: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_ARCHIVED, default: false })
  isArchived: boolean;

  @Column({
    name: Tables.AUTOMOBILE_ADS.COLUMN.REVIEW_START_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  reviewStartDatetime?: Date;

  @Column({
    name: Tables.AUTOMOBILE_ADS.COLUMN.REVIEW_END_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  reviewEndDatetime?: Date;

  @Column({
    name: Tables.AUTOMOBILE_ADS.COLUMN.APPROVED_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  approvedDatetime?: Date;

  @Column({
    name: Tables.AUTOMOBILE_ADS.COLUMN.ARCHIVED_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  archivedDatetime?: Date;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.LIVE_DATETIME, type: 'timestamp', nullable: true })
  liveDatetime?: Date;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.PAID_DATETIME, type: 'timestamp', nullable: true })
  paidDatetime?: Date;

  @Column({
    name: Tables.AUTOMOBILE_ADS.COLUMN.LAST_UPDATE_DATETIME,
    type: 'timestamp',
    nullable: true,
  })
  lastUpdateDatetime?: Date;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_DELETED, default: false })
  isDeleted: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.IS_SOLD, default: false })
  isSold: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.EXPIRED_SPONSORED_AD, default: false })
  expiredSponsoredAd: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.SUBMITTED, default: false })
  submitted: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.REJECTED, default: false })
  rejected: boolean;

  @Column({ name: Tables.AUTOMOBILE_ADS.COLUMN.CHANGE_REQUEST, default: false })
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

@Entity(Tables.AUTOMOBILE_AD_IMAGES.TABLE)
export class AutomobileAdImage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.AUTOMOBILE_AD_IMAGES.COLUMN.AD_ID })
  adId: number;

  @Column({ length: 255, name: Tables.AUTOMOBILE_AD_IMAGES.COLUMN.IMAGE_URL })
  imageUrl: string;

  @Column({ name: Tables.AUTOMOBILE_AD_IMAGES.COLUMN.IS_PRIMARY, default: false })
  isPrimary: boolean;

  @Column({ name: Tables.AUTOMOBILE_AD_IMAGES.COLUMN.ORDER_NUMBER, nullable: true })
  orderNumber?: number;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_AD_IMAGES.COLUMN.UPLOAD_DATETIME })
  uploadDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAd, ad => ad.images, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'ad_id' })
  // ad: AutomobileAd;
}

@Entity(Tables.AUTOMOBILE_ATTRIBUTES.TABLE)
export class AutomobileAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.CATEGORY_ID })
  categoryId: number;

  @Column({ length: 255, name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.ATTRIBUTE_KEY })
  attKey: string;

  @Column({ name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.IS_MULTI_CHOICE })
  isMultiChoice: boolean;

  @Column({ name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.IS_REQUIRED })
  isRequired: boolean;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.CREATE_DATETIME })
  createDatetime: Date;

  @UpdateDateColumn({ name: Tables.AUTOMOBILE_ATTRIBUTES.COLUMN.UPDATE_DATETIME })
  updateDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileCategory, category => category.attributes, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'category_id' })
  // category: AutomobileCategory;

  // @OneToMany(() => AutomobileAttributeOption, option => option.attribute)
  // options: AutomobileAttributeOption[];
}

@Entity(Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS.TABLE)
export class AutomobileAttributeOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS.COLUMN.ATTRIBUTE_ID })
  attId: number;

  @Column({ length: 255, name: Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS.COLUMN.OPTION_KEY })
  attOptionKey: string;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS.COLUMN.CREATE_DATETIME })
  createDatetime: Date;

  @UpdateDateColumn({ name: Tables.AUTOMOBILE_ATTRIBUTE_OPTIONS.COLUMN.UPDATE_DATETIME })
  updateDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAttribute, attribute => attribute.options, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'att_id' })
  // attribute: AutomobileAttribute;
}

@Entity(Tables.AUTOMOBILE_AD_ATTRIBUTES.TABLE)
export class AutomobileAdAttribute {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.AD_ID })
  adId: number;

  @Column({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.ATTRIBUTE_ID })
  attId: number;

  @Column({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.OPTION_ID, nullable: true })
  optionId?: number;

  @Column({
    length: 255,
    name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.CUSTOM_VALUE,
    nullable: true,
  })
  customValue?: string;

  @Column({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.HAS_CUSTOM_VALUE, default: false })
  hasCustomValue: boolean;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.CREATE_DATETIME })
  createDatetime: Date;

  @UpdateDateColumn({ name: Tables.AUTOMOBILE_AD_ATTRIBUTES.COLUMN.UPDATE_DATETIME })
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

@Entity(Tables.AUTOMOBILE_AUDIT_LOGS.TABLE)
export class AutomobileAuditLog {
  @PrimaryGeneratedColumn({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.ID })
  auditlogId: number;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.AD_ID })
  adId: number;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.CHANGED_FIELD, length: 255 })
  changedField: string;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.OLD_VALUE, type: 'text', nullable: true })
  oldValue?: string;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.NEW_VALUE, type: 'text', nullable: true })
  newValue?: string;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.IS_USER_ACTION, nullable: true })
  isUserAction?: boolean;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.USER_ID, nullable: true })
  userId?: number;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.IS_ADMIN_ACTION, nullable: true })
  isAdminAction?: boolean;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.ADMIN_ID, nullable: true })
  adminId?: number;

  @Column({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.IS_SYSTEM_ACTION, nullable: true })
  isSystemAction?: boolean;

  @Column({
    name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.ACTION_DESCRIPTION,
    type: 'text',
    nullable: true,
  })
  actionDescription?: string;

  @CreateDateColumn({ name: Tables.AUTOMOBILE_AUDIT_LOGS.COLUMN.ACTION_DATETIME })
  actionDatetime: Date;

  // Relations
  // @ManyToOne(() => AutomobileAd, ad => ad.auditLogs, { onDelete: 'CASCADE' })
  // @JoinColumn({ name: 'ad_id' })
  // ad: AutomobileAd;
}

@Entity(Tables.USER_VIEWS.TABLE)
export class UserView {
  @PrimaryGeneratedColumn({ name: Tables.USER_VIEWS.COLUMN.ID })
  userViewId: number;

  @Column({ name: Tables.USER_VIEWS.COLUMN.AD_ID })
  adId: number;

  @Column({ name: Tables.USER_VIEWS.COLUMN.MODULE_ID })
  moduleId: number;

  @Column({ name: Tables.USER_VIEWS.COLUMN.USER_ID, nullable: true })
  userId?: number;

  @CreateDateColumn({ name: Tables.USER_VIEWS.COLUMN.VIEW_DATETIME })
  viewDatetime: Date;

  @Column({ name: Tables.USER_VIEWS.COLUMN.IP_ADDRESS, length: 50, nullable: true })
  ipAddress?: string;
}

@Entity(Tables.APPROVED_AUTOMOBILE_AD_SNAPSHOTS.TABLE)
export class ApprovedAutomobileAdSnapshot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.APPROVED_AUTOMOBILE_AD_SNAPSHOTS.COLUMN.AD_ID })
  adId: number;

  @Column({ name: Tables.APPROVED_AUTOMOBILE_AD_SNAPSHOTS.COLUMN.SNAPSHOT_DATA, type: 'jsonb' })
  snapshotData: Record<string, any>;

  @CreateDateColumn({ name: Tables.APPROVED_AUTOMOBILE_AD_SNAPSHOTS.COLUMN.SNAPSHOT_DATE })
  snapshotDate: Date;

  @ManyToOne(() => AutomobileAds, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'ad_id' })
  ad: AutomobileAds;
}
