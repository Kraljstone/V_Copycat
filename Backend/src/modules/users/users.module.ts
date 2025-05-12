import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Services } from '../../utils/constants';
import { DatabaseModule } from '../database/database.module';
import { createRepositoryProvider } from 'src/utils/generic-providers';
import { User } from './entities/user.entity';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [
    {
      provide: Services.USERS,
      useClass: UsersService,
    },
    createRepositoryProvider<User>(User, Services.USERS_REPOSITORY),
  ],
})
export class UsersModule {}
