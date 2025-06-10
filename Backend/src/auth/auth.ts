import { User } from './entities/auth.entity';

export interface RegisterUserParams {
  fullname: string;
  phoneNumber: string;
  password: string;
}

export interface LoginUserParams {
  phoneNumber: string;
  password: string;
}

export interface TokenPayload {
  sub: number;
  phoneNumber: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthService {
  registerUser(userDetails: RegisterUserParams): Promise<User>;
  validateUser(userDetails: LoginUserParams): Promise<User>;
  refreshTokens(userId: number, refreshToken: string): Promise<User>;
}
