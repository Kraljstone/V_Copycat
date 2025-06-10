import { Database } from '../utils/constants';
import { AppDataSource } from './database.config';

export const databaseProviders = [
  {
    provide: Database.DATA_SOURCE,
    useFactory: async () => {
      return AppDataSource.initialize();
    },
  },
];
