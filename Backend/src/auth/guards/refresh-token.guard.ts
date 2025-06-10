import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';
import { ErrorMessages, Strategies } from 'src/utils/constants';

@Injectable()
export class RefreshTokenGuard extends AuthGuard(Strategies.JWT_REFRESH) {
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { refreshToken, expiredAccessToken } = request.body;

    if (!refreshToken || !expiredAccessToken) {
      throw new UnauthorizedException(ErrorMessages.USER.INVALID_REFRESH_TOKEN);
    }

    // Validate token format (basic check)
    if (!this.isValidTokenFormat(refreshToken) || !this.isValidTokenFormat(expiredAccessToken)) {
      throw new UnauthorizedException(ErrorMessages.USER.INVALID_REFRESH_TOKEN);
    }

    return super.canActivate(context);
  }

  private isValidTokenFormat(token: string): boolean {
    // Basic JWT format validation (header.payload.signature)
    const parts = token.split('.');
    return parts.length === 3 && parts.every(part => /^[A-Za-z0-9-_=]+$/.test(part));
  }
}
