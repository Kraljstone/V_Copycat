import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { DatabaseModule } from 'src/database/database.module';
import { Services } from '../utils/constants';
import { createRepositoryProvider } from '../utils/generic-providers';
import { User } from './entities/auth.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [DatabaseModule, JwtModule.register({})],
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
    createRepositoryProvider<User>(User, Services.AUTH_REPOSITORY),
  ],
})
export class AuthModule {}
