import { State } from './entities/location.entity';
import { City } from './entities/location.entity';

export interface ILocationService {
  getLocation(): Promise<{ states: State[] }>;
}

export interface Location {
  states: State[];
  cities: City[];
}
