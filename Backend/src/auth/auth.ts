import { User } from './entities/auth.entity';
import { AuthResponseDto } from './dto/auth-response.dto';

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

export type AuthResponse = AuthResponseDto;

export interface IAuthService {
  registerUser(userDetails: RegisterUserParams): Promise<AuthResponse>;
  validateUser(userDetails: LoginUserParams): Promise<AuthResponse>;
  refreshTokens(userId: number, refreshToken: string): Promise<AuthResponse>;
}
