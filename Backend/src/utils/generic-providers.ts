import { DataSource } from 'typeorm';
import { Database } from './constants';

export const createRepositoryProvider = <T>(entity: new () => T, service: string) => ({
  provide: service,
  useFactory: (dataSource: DataSource) => dataSource.getRepository(entity),
  inject: [Database.DATA_SOURCE],
});
