import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Database } from 'src/utils/constants';
import { Services } from 'src/utils/constants';

export const userProviders = [
  {
    provide: Services.USERS_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [Database.DATA_SOURCE],
  },
];
