import { Controller, Post, Body, Inject, UsePipes, UseGuards, Req } from '@nestjs/common';
import { Routes, Services, Strategies } from 'src/utils/constants';
import { IAuthService } from './auth';
import { ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthResponseDto } from './dto/auth-response.dto';
@Controller(Routes.AUTH.ROUTE)
export class AuthController {
  constructor(
    @Inject(Services.AUTH)
    private readonly authService: IAuthService,
  ) {}

  @Post(Routes.AUTH.REGISTER)
  @UsePipes(new ValidationPipe())
  register(@Body() registerUserDto: RegisterUserDto): Promise<AuthResponseDto> {
    const { confirmPassword, ...userData } = registerUserDto;
    return this.authService.registerUser(userData);
  }

  @Post(Routes.AUTH.LOGIN)
  @UsePipes(new ValidationPipe())
  login(@Body() loginUserDto: LoginUserDto): Promise<AuthResponseDto> {
    return this.authService.validateUser(loginUserDto);
  }

  @UseGuards(AuthGuard(Strategies.JWT_REFRESH))
  @Post(Routes.AUTH.REFRESH)
  refreshTokens(@Req() req: any): Promise<AuthResponseDto> {
    const userId = req.user.userId;
    const refreshToken = req.user.refreshToken;
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
