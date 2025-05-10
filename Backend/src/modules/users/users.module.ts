import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Services } from '../../utils/constants';
import { userProviders } from './user.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
    ...userProviders,
  ],
})
export class UsersModule {}
