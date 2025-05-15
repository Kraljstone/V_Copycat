import { Controller, Post, Body, Inject, UsePipes, UseGuards, Req } from '@nestjs/common';
import { Routes, Services, SwaggerTags } from 'src/utils/constants';
import { IAuthService } from './auth';
import { ValidationPipe } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthResponseDto } from './dto/auth-response.dto';

@ApiTags(SwaggerTags.API.TAGS.AUTH)
@Controller(Routes.AUTH.ROUTE)
export class AuthController {
  constructor(
    @Inject(Services.AUTH)
    private readonly authService: IAuthService,
  ) {}

  @Post(Routes.AUTH.REGISTER)
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.REGISTER })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.OK.STATUS.MESSAGE.REGISTER,
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.MESSAGE.REGISTER,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.CONFLICT.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.CONFLICT.STATUS.MESSAGE.REGISTER,
  })
  register(@Body() registerUserDto: RegisterUserDto): Promise<AuthResponseDto> {
    const { confirmPassword, ...userData } = registerUserDto;
    return this.authService.registerUser(userData);
  }

  @Post(Routes.AUTH.LOGIN)
  @UsePipes(new ValidationPipe())
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.LOGIN })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.OK.STATUS.MESSAGE.LOGIN,
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.BAD_REQUEST.STATUS.MESSAGE.LOGIN,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.UNAUTHORIZED.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.UNAUTHORIZED.STATUS.MESSAGE.LOGIN,
  })
  login(@Body() loginUserDto: LoginUserDto): Promise<AuthResponseDto> {
    return this.authService.validateUser(loginUserDto);
  }

  @UseGuards(AuthGuard('jwt-refresh'))
  @Post(Routes.AUTH.REFRESH)
  @ApiBearerAuth()
  @ApiOperation({ summary: SwaggerTags.API.OPERATIONS.REFRESH })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.OK.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.OK.STATUS.MESSAGE.REFRESH_TOKENS,
    type: AuthResponseDto,
  })
  @ApiResponse({
    status: SwaggerTags.API.RESPONSE.UNAUTHORIZED.STATUS.CODE,
    description: SwaggerTags.API.RESPONSE.UNAUTHORIZED.STATUS.MESSAGE.REFRESH_TOKENS,
  })
  refreshTokens(@Req() req: any): Promise<AuthResponseDto> {
    const userId = req.user.userId;
    const refreshToken = req.user.refreshToken;
    return this.authService.refreshTokens(userId, refreshToken);
  }
}
