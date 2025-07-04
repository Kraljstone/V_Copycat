import {
  IsString,
  IsNotEmpty,
  IsPhoneNumber,
  IsStrongPassword,
  ValidateIf,
} from 'class-validator';

/**
 * DTO for user registration
 */
export class RegisterUserDto {
  /**
   * User's full name
   * @example "John Doe"
   */
  @IsString({ message: 'Fullname must be a string' })
  @IsNotEmpty({ message: 'Fullname is required' })
  fullname: string;

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
   * User's password - must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character
   * @example "StrongP@ss123"
   */
  @IsString({ message: 'Password must be a string' })
  @IsNotEmpty({ message: 'Password is required' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    },
    {
      message:
        'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  )
  password: string;

  /**
   * Password confirmation - must match the password field
   * @example "StrongP@ss123"
   */
  @IsString({ message: 'Confirm password must be a string' })
  @IsNotEmpty({ message: 'Confirm password is required' })
  @ValidateIf(o => o.password !== o.confirmPassword)
  @IsString()
  confirmPassword: string;
}
