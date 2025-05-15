import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Tables } from 'src/utils/constants';

@Entity(Tables.SPONSORED.TABLE)
export class Sponsored {
  @PrimaryGeneratedColumn({ name: Tables.SPONSORED.COLUMN.ID })
  id: number;

  @Column({ name: Tables.SPONSORED.COLUMN.MODULE_ID })
  moduleId: number;

  @Column({ name: Tables.SPONSORED.COLUMN.AMOUNT_PAID, type: 'numeric', precision: 10, scale: 2 })
  amountPaid: number;

  @Column({ name: Tables.SPONSORED.COLUMN.AD_ID })
  adId: number;

  @Column({ name: Tables.SPONSORED.COLUMN.SPONSORED_UNTIL })
  sponsoredUntil: Date;

  @CreateDateColumn({ name: Tables.SPONSORED.COLUMN.CREATE_DATETIME })
  createDatetime: Date;

  @Column({ name: Tables.SPONSORED.COLUMN.USER_ID })
  userId: number;

  @Column({ name: Tables.SPONSORED.COLUMN.IS_ACTIVE })
  isActive: boolean;
}
