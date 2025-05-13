import { DataSource } from 'typeorm';
import { AutomobileAd } from './entities/automobile.entity';
import { Database, Services } from 'src/utils/constants';

export const automobileProviders = [
  {
    provide: Services.AUTOMOBILE_ADS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(AutomobileAd),
    inject: [Database.DATA_SOURCE],
  },
];
