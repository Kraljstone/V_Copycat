import { Module } from '@nestjs/common';
import { AutomobilesController } from './automobiles.controller';
import { AutomobileAds } from './entities/automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { Services } from 'src/utils/constants';
import { Sponsored } from 'src/typeorm/entities/sponsored.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([AutomobileAds, Sponsored])],
  controllers: [AutomobilesController],
  providers: [
    {
      provide: Services.AUTOMOBILE_ADS,
      useClass: AutomobilesService,
    },
  ],
})
export class AutomobilesModule {}
