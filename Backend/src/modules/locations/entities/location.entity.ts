import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Tables } from 'src/utils/constants';

@Entity(Tables.CFG_STATES.TABLE)
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.CFG_STATES.COLUMN.NAME_KEY, unique: true, nullable: true })
  nameKey: string;

  @OneToMany(() => City, city => city.state)
  cities: City[];
}

@Entity(Tables.CFG_CITIES.TABLE)
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: Tables.CFG_CITIES.COLUMN.CITY_KEY, unique: true, nullable: true })
  cityKey: string;

  @ManyToOne(() => State, state => state.cities, { eager: true })
  @JoinColumn({ name: Tables.CFG_CITIES.COLUMN.STATE_ID })
  state: State;
}
