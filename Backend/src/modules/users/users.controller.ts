import {
  Controller,
  Post,
  Body,
  Inject,
  Logger,
  BadRequestException,
  UsePipes,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Routes, Services } from 'src/utils/constants';
import { IUsersService } from './users';
import { ValidationPipe } from '@nestjs/common';

@Controller(Routes.USERS)
export class UsersController {
  private readonly logger = new Logger(UsersController.name);

  constructor(
    @Inject(Services.USERS)
    private readonly usersService: IUsersService,
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
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
