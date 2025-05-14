import { DataSource } from 'typeorm';
import { Database } from 'src/utils/constants';
import { databaseConfig } from 'src/config/db/database.config';

export const databaseProviders = [
  {
    provide: Database.DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource(databaseConfig);
      return dataSource.initialize();
    },
  },
];
