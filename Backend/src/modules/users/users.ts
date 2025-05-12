import { User } from './entities/user.entity';

export interface CreateUserParams {
  fullname: string;
  phoneNumber: string;
  password: string;
}

export interface IUsersService {
  createUser(userDetails: CreateUserParams): Promise<User>;
}
