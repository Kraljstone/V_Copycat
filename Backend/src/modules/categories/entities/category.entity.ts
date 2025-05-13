import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { Tables } from 'src/utils/constants';
import { AutomobileCategory } from '../../automobiles/entities/automobile.entity';

@Entity(Tables.CFG_CATEGORIES)
export class CfgCategory {
  @PrimaryGeneratedColumn()
  module_id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  module_key: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  image_url?: string;

  @Column({ type: 'text', nullable: true })
  description?: string;

  @OneToMany(() => AutomobileCategory, category => category.module)
  automobileCategories: AutomobileCategory[];

  @CreateDateColumn({
    type: 'timestamp',
    name: 'create_datetime',
    default: () => 'CURRENT_TIMESTAMP',
  })
  create_datetime: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'update_datetime',
    nullable: true,
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  update_datetime?: Date;
}
