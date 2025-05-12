import { Injectable, NotFoundException, Logger } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
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
      const hashedPassword = await bcrypt.hash(userDetails.password, 10);
      const user = this.userRepository.create({
        ...userDetails,
        hashPassword: hashedPassword,
        username: userDetails.phoneNumber,
        createdAt: new Date(),
      });
      const savedUser = await this.userRepository.save(user);
      this.logger.log(`User saved successfully: ${JSON.stringify(savedUser)}`);
      return savedUser;
    } catch (error) {
      this.logger.error(`Error creating user: ${error.message}`, error.stack);
      throw error;
    }
  }

  async findAll() {
    try {
      const users = await this.userRepository.find();
      return users;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOneBy({ userId: id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOneBy({ userId: id });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    Object.assign(user, updateUserDto);
    return this.userRepository.save(user);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
