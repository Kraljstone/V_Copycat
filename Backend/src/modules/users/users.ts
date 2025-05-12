import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

export interface CreateUserParams {
  fullname: string;
  phoneNumber: string;
  password: string;
}

export interface IUsersService {
  createUser(userDetails: CreateUserParams): Promise<User>;
  findAll(): Promise<User[]>;
  findOne(id: number): Promise<User>;
  update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
  remove(id: number): Promise<void>;
}
