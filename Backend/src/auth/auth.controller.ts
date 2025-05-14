import {
  Controller,
  Post,
  Body,
  Inject,
  BadRequestException,
  UsePipes,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { Routes, Services } from 'src/utils/constants';
import { IAuthService } from './auth';
import { ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiTags('Authentication')
@Controller(Routes.AUTH)
export class AuthController {
  constructor(
    @Inject(Services.AUTH)
    private readonly authService: IAuthService,
  ) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({
    status: 201,
    description: 'User successfully registered',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid input data' })
  @ApiResponse({ status: 409, description: 'Conflict - User already exists' })
  register(@Body() registerUserDto: RegisterUserDto): Promise<AuthResponseDto> {
    const { confirmPassword, ...userData } = registerUserDto;
    return this.authService.registerUser(userData);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: 'Login user' })
  @ApiResponse({
    status: 200,
    description: 'User successfully logged in',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request - Invalid credentials' })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid credentials' })
  login(@Body() loginUserDto: LoginUserDto): Promise<AuthResponseDto> {
    return this.authService.validateUser(loginUserDto);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post('refresh')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Refresh access token' })
  @ApiResponse({
    status: 200,
    description: 'Tokens successfully refreshed',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized - Invalid refresh token' })
  refreshTokens(@Req() req: any): Promise<AuthResponseDto> {
    const userId = req.user.userId;
    const refreshToken = req.user.refreshToken;
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
