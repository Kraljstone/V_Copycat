import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { State } from './entities/location.entity';
import { City } from './entities/location.entity';
import { ILocationService } from './locations';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class LocationService implements ILocationService {
  constructor(
    @InjectRepository(State)
    private stateRepository: Repository<State>,
  ) {}

  async getLocation() {
    const states = await this.stateRepository.find({
      relations: ['cities'],
      order: {
        nameKey: 'ASC',
        cities: {
          cityKey: 'ASC',
        },
      },
    });

    return {
      states: states.map(state => ({
        id: state.id,
        nameKey: state.nameKey,
        cities: state.cities.map(city => ({
          id: city.id,
          cityKey: city.cityKey,
        })),
      })),
    };
  }
}
