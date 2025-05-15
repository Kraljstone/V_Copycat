import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Tables } from 'src/utils/constants';
@Entity(Tables.USERS.TABLE)
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: Tables.USERS.COLUMN.ID })
  @Expose()
  userId: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  @Expose()
  fullname: string;

  @Column({ type: 'varchar', length: 25, nullable: false, unique: true })
  @Expose()
  username: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: Tables.USERS.COLUMN.PASSWORD,
  })
  @Exclude()
  hashPassword: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    name: Tables.USERS.COLUMN.PROFILE_IMAGE_URL,
  })
  @Expose()
  profileImageUrl?: string;

  @Column({ type: 'boolean', default: false, name: Tables.USERS.COLUMN.IS_LEGACY_USER })
  @Expose()
  isLegacyUser: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: Tables.USERS.COLUMN.ACCOUNT_CREATION_DATETIME,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Expose()
  accountCreationDatetime: Date;

  @Column({ type: 'boolean', default: true })
  @Expose()
  active: boolean;

  @Column({ type: 'boolean', default: false })
  @Expose()
  disabled: boolean;

  @Column({ type: 'boolean', default: false, name: Tables.USERS.COLUMN.ACCOUNT_VERIFIED })
  @Expose()
  accountVerified: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false, name: Tables.USERS.COLUMN.PHONE_NUMBER })
  @Expose()
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: Tables.USERS.COLUMN.REFRESH_TOKEN })
  @Expose()
  refreshToken: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: Tables.USERS.COLUMN.CREATED_AT,
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Expose()
  createdAt: Date;

  @UpdateDateColumn({ name: Tables.USERS.COLUMN.UPDATED_AT })
  @Expose()
  updatedAt: Date;
}
