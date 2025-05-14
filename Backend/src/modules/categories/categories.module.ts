import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Services } from 'src/utils/constants';
import { DatabaseModule } from '../../database/database.module';
import { createRepositoryProvider } from 'src/utils/generic-providers';
import { CfgCategory } from './entities/category.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriesController],
  providers: [
    {
      provide: Services.CFG_CATEGORIES,
      useClass: CategoriesService,
    },
    createRepositoryProvider<CfgCategory>(CfgCategory, Services.CFG_CATEGORIES_REPOSITORY),
  ],
})
export class CategoriesModule {}
