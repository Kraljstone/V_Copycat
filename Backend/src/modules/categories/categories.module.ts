import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { Services } from 'src/utils/constants';
import { CfgCategory } from './entities/category.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CfgCategory])],
  controllers: [CategoriesController],
  providers: [
    {
      provide: Services.CFG_CATEGORIES,
      useClass: CategoriesService,
    },
  ],
})
export class CategoriesModule {}
