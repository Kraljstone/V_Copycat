import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './database/database.config';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { CategoriesModule } from './modules/categories/categories.module';
import { LocationModule } from './modules/locations/locations.module';
import { AutomobilesModule } from './modules/automobiles/automobiles.module';
import { HomeModule } from './modules/home/home.module';
import { RealEstateModule } from './modules/real-estate/real-estate.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(databaseConfig),
    PassportModule.register({ session: true }),
    AuthModule,
    CategoriesModule,
    LocationModule,
    AutomobilesModule,
    HomeModule,
    RealEstateModule,
  ],
})
export class AppModule {}
