import { Controller, Post, Body, Inject, BadRequestException, UsePipes } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IUsersService } from './users';
import { ValidationPipe } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Controller(Routes.USERS)
export class UsersController {
  constructor(
    @Inject(Services.USERS)
    private readonly usersService: IUsersService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { password, confirmPassword, ...userData } = createUserDto;
    if (password !== confirmPassword) {
      throw new BadRequestException('Password and confirm password do not match');
    }
    if (!password || !confirmPassword) {
      throw new BadRequestException('Password and confirm password are required');
    }

    return this.usersService.createUser({
      ...userData,
      password,
    });
  }
}
