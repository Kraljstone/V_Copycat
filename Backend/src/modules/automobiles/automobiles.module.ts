import { Module } from '@nestjs/common';
import { AutomobilesController } from './automobiles.controller';
import { AutomobileAd } from './entities/automobile.entity';
import { AutomobilesService } from './automobiles.service';
import { createRepositoryProvider } from 'src/utils/generic-providers';
import { DatabaseModule } from '../database/database.module';
import { Services } from 'src/utils/constants';

@Module({
  imports: [DatabaseModule],
  controllers: [AutomobilesController],
  providers: [
    {
      provide: Services.AUTOMOBILE_ADS,
      useClass: AutomobilesService,
    },
    createRepositoryProvider<AutomobileAd>(AutomobileAd, Services.AUTOMOBILE_ADS_REPOSITORY),
  ],
})
export class AutomobilesModule {}
