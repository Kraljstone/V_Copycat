import { User } from '../entities/auth.entity';

/**
 * Response DTO for authentication data
 */
export class AuthResponseDto {
  /**
   * User information
   * @example {
   *   "id": 1,
   *   "fullname": "John Doe",
   *   "phoneNumber": "+381637471812"
   * }
   */
  user: User;

  /**
   * JWT access token
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   */
  accessToken: string;

  /**
   * JWT refresh token
   * @example "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   */
  refreshToken: string;
}
