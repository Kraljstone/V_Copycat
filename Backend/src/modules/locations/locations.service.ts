import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Services } from 'src/utils/constants';
import { State } from './entities/location.entity';
import { ILocationService } from './locations';

@Injectable()
export class LocationService implements ILocationService {
  constructor(@Inject(Services.STATE_REPOSITORY) private stateRepository: Repository<State>) {}

  async getLocation() {
    const states = await this.stateRepository.find({
      relations: ['cities'],
    });

    return {
      states,
    };
  }
}
