import { DataSource } from 'typeorm';
import { Database } from 'src/utils/constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: Database.DATA_SOURCE,
    useFactory: async () => {
      return new DataSource(databaseConfig).initialize();
    },
  },
];
