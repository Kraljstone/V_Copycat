import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'cfg_states' })
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name_key', unique: true })
  nameKey: string;

  @OneToMany(() => City, city => city.state)
  cities: City[];
}

@Entity({ name: 'cfg_cities' })
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'city_key', unique: true })
  cityKey: string;

  @ManyToOne(() => State, state => state.cities, { eager: true })
  @JoinColumn({ name: 'state_id' })
  state: State;
}
