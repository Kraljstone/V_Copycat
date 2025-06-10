import { DataSource, DataSourceOptions } from 'typeorm';
import * as path from 'path';
import { config } from 'dotenv';

// Load environment variables
config();

// Validate required environment variables
const requiredEnvVars = ['DB_HOST', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_DATABASE'];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    throw new Error(`Missing required environment variable: ${envVar}`);
  }
}

// Database configuration options
const databaseConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    path.join(__dirname, '../modules/**/*.entity{.ts,.js}'),
    path.join(__dirname, '../auth/**/*.entity{.ts,.js}'),
    path.join(__dirname, '../typeorm/**/*.entity{.ts,.js}'),
  ],
  migrations: [path.join(__dirname, '../migrations/*{.ts,.js}')],
  migrationsRun: true,
  synchronize: false,
  migrationsTableName: 'migrations',
  migrationsTransactionMode: 'all',
  logging: ['error', 'warn', 'migration'],
};

// Create and export the DataSource instance
export const AppDataSource = new DataSource(databaseConfig);

// Export the config for other uses
export { databaseConfig };
