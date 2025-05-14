import { ApiProperty } from '@nestjs/swagger';
import { User } from '../entities/auth.entity';

export class AuthResponseDto {
  @ApiProperty({
    description: 'User information',
    type: User,
  })
  user: User;

  @ApiProperty({
    description: 'JWT access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  accessToken: string;

  @ApiProperty({
    description: 'JWT refresh token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  refreshToken: string;
}
