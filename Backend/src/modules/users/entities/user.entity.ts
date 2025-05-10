import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({ type: 'int', name: 'user_id' })
  userId: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  fullname: string;

  @Column({ type: 'varchar', length: 25, nullable: false, unique: true })
  username: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    name: 'hash_password',
  })
  hashPassword: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    name: 'profile_image_url',
  })
  profileImageUrl?: string;

  @Column({ type: 'boolean', default: false, name: 'is_legacy_user' })
  isLegacyUser: boolean;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'account_creation_datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  accountCreationDatetime: Date;

  @Column({ type: 'boolean', default: true })
  active: boolean;

  @Column({ type: 'boolean', default: false })
  disabled: boolean;

  @Column({ type: 'boolean', default: false, name: 'account_verified' })
  accountVerified: boolean;
}
