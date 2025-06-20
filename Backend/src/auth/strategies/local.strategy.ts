import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { Inject, Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { Services } from 'src/utils/constants';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(@Inject(Services.AUTH) private readonly authService: AuthService) {
    super({
      usernameField: 'phoneNumber',
      passwordField: 'password',
    });
  }

  async validate(phoneNumber: string, password: string) {
    try {
      const user = await this.authService.validateUser({ phoneNumber, password });
      if (!user) {
        throw new UnauthorizedException('Invalid credentials');
      }
      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
