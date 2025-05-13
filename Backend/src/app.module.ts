import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/db/database.config';
import { UsersModule } from './modules/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { LocationModule } from './modules/locations/locations.module';
import { AutomobilesModule } from './modules/automobiles/automobiles.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    CategoriesModule,
    LocationModule,
    AutomobilesModule,
  ],
})
export class AppModule {}
