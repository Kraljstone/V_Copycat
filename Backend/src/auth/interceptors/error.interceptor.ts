import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  ConflictException,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Database, ErrorMessages, Jwt } from 'src/utils/constants';
import { User } from '../entities/auth.entity';

@Injectable()
export class ErrorInterceptor implements NestInterceptor {
  intercept(_context: ExecutionContext, next: CallHandler<User>): Observable<User> {
    return next.handle().pipe(
      catchError(error => {
        if (error.code === Database.UNIQUE_VIOLATION) {
          return throwError(
            () => new ConflictException(ErrorMessages.USER.PHONE_NUMBER_ALREADY_EXISTS),
          );
        }

        if (error.name === Jwt.INVALID_TOKEN || error.name === Jwt.EXPIRED_TOKEN) {
          return throwError(
            () => new UnauthorizedException(ErrorMessages.USER.INVALID_CREDENTIALS),
          );
        }

        if (error.message?.includes('refresh token')) {
          return throwError(
            () => new UnauthorizedException(ErrorMessages.USER.INVALID_REFRESH_TOKEN),
          );
        }

        return throwError(() => error);
      }),
    );
  }
}
