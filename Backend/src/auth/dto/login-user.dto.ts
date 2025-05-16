import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

/**
 * DTO for user login
 */
export class LoginUserDto {
  /**
   * User's phone number with country code
   * @example "+381637471812"
   */
  @IsString({ message: 'Phone number must be a string' })
  @IsNotEmpty({ message: 'Phone number is required' })
  @IsPhoneNumber(undefined, {
    message: 'Please provide a valid phone number with country code (e.g., +381637471812)',
  })
  phoneNumber: string;

  /**
   * User's password
   * @example "StrongP@ss123"
   */
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
