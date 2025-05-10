import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';
import { Services, Tables, Database } from 'src/utils/constants';

export const userProviders = [
  {
    provide: Services.USERS,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(User).extend({
        tableName: Tables.USERS,
      }),
    inject: [Database.DATA_SOURCE],
  },
];
