import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude, Expose } from 'class-transformer';
import { Tables } from 'src/utils/constants';
@Entity(Tables.USERS)
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
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
    name: 'hash_password',
  })
  @Exclude()
  hashPassword: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    name: 'profile_image_url',
  })
  @Expose()
  profileImageUrl?: string;

  @Column({ type: 'boolean', default: false, name: 'is_legacy_user' })
  @Expose()
  isLegacyUser: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'account_creation_datetime',
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

  @Column({ type: 'boolean', default: false, name: 'account_verified' })
  @Expose()
  accountVerified: boolean;

  @Column({ type: 'varchar', length: 255, nullable: false, name: 'phone_number' })
  @Expose()
  phoneNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true, name: 'refresh_token' })
  @Expose()
  refreshToken: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @Expose()
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  @Expose()
  updatedAt: Date;
}
