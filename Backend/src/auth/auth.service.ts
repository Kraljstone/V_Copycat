import { Injectable, Logger, ConflictException, UnauthorizedException } from '@nestjs/common';
import { RegisterUserParams, IAuthService, LoginUserParams, TokenPayload } from './auth';
import { User } from './entities/auth.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { ErrorMessages } from 'src/utils/constants';

@Injectable()
export class AuthService implements IAuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(userDetails: RegisterUserParams) {
    // Check if user with this phone number already exists
    const hashedPassword = await bcrypt.hash(userDetails.password, 10);

    const user = this.userRepository.create({
      ...userDetails,
      hashPassword: hashedPassword,
      username: userDetails.phoneNumber,
      createdAt: new Date(),
    });
    const savedUser = await this.userRepository.save(user);
    const tokens = await this.generateTokens(savedUser);

    return {
      ...savedUser,
      ...tokens,
    };
  }

  async validateUser({ phoneNumber, password }: LoginUserParams) {
    const user = await this.userRepository.findOne({
      where: { phoneNumber },
    });

    if (!user) {
      throw new UnauthorizedException(ErrorMessages.USER.INVALID_CREDENTIALS);
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashPassword);
    if (!isPasswordValid) {
      throw new UnauthorizedException(ErrorMessages.USER.INVALID_CREDENTIALS);
    }

    const tokens = await this.generateTokens(user);

    return {
      ...user,
      ...tokens,
    };
  }

  async refreshTokens(userId: number, refreshToken: string) {
    const user = await this.userRepository.findOne({
      where: { userId: userId },
    });

    if (!user || user.refreshToken !== refreshToken) {
      throw new UnauthorizedException(ErrorMessages.USER.INVALID_REFRESH_TOKEN);
    }

    return user;
  }

  private async generateTokens(user: User) {
    const payload: TokenPayload = {
      sub: user.userId,
      phoneNumber: user.phoneNumber,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: '15m',
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: '7d',
      }),
    ]);

    // Save refresh token to user
    await this.userRepository.update(user.userId, { refreshToken });

    return {
      accessToken,
      refreshToken,
    };
  }
}
