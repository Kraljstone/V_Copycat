import { Injectable, Logger, ConflictException } from '@nestjs/common';
import { CreateUserParams, IUsersService } from './users';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Inject } from '@nestjs/common';
import { Services } from '../../utils/constants';
@Injectable()
export class UsersService implements IUsersService {
  private readonly logger = new Logger(UsersService.name);

  constructor(
    @Inject(Services.USERS_REPOSITORY)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(userDetails: CreateUserParams) {
    try {
      // Check if user with this phone number already exists
      const existingUser = await this.userRepository.findOne({
        where: { phoneNumber: userDetails.phoneNumber },
      });

      if (existingUser) {
        throw new ConflictException('A user with this phone number already exists');
      }

      const hashedPassword = await bcrypt.hash(userDetails.password, 10);
      const user = this.userRepository.create({
        ...userDetails,
        hashPassword: hashedPassword,
        username: userDetails.phoneNumber,
        createdAt: new Date(),
      });
      const savedUser = await this.userRepository.save(user);
      return savedUser;
    } catch (error) {
      this.logger.error(`Error creating user: ${error.message}`, error.stack);
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new ConflictException('A user with this phone number already exists');
    }
  }
}
