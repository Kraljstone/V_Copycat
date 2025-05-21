import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/database.config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { LocationModule } from './modules/locations/locations.module';
import { AutomobilesModule } from './modules/automobiles/automobiles.module';
import { HomeModule } from './modules/home/home.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    AuthModule,
    CategoriesModule,
    LocationModule,
    AutomobilesModule,
    HomeModule,
  ],
})
export class AppModule {}
