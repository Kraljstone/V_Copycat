import { Controller, Post, Body, Inject, UseGuards, Req, UseInterceptors } from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { User } from './entities/auth.entity';
import { LocalGuard } from './guards/local.guard';
import { RefreshTokenGuard } from './guards/refresh-token.guard';
@Controller(Routes.AUTH.ROUTE)
export class AuthController {
  constructor(
    @Inject(Services.AUTH)
    private readonly authService: IAuthService,
  ) {}

  @Post(Routes.AUTH.REGISTER)
  @UseInterceptors(AuthInterceptor)
  register(@Body() registerUserDto: RegisterUserDto): Promise<User> {
    const { confirmPassword, ...userData } = registerUserDto;
    return this.authService.registerUser(userData);
  }

  @Post(Routes.AUTH.LOGIN)
  @UseGuards(LocalGuard)
  @UseInterceptors(AuthInterceptor)
  login(@Body() loginUserDto: LoginUserDto): Promise<User> {
    return this.authService.validateUser(loginUserDto);
  }

  @Post(Routes.AUTH.REFRESH)
  @UseGuards(RefreshTokenGuard)
  refreshTokens(@Req() req: any): Promise<User> {
    const userId = req.user.userId;
    const refreshToken = req.user.refreshToken;
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
