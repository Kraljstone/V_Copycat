import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { plainToInstance } from 'class-transformer';
import { User } from '../entities/auth.entity';

@Injectable()
export class AuthInterceptor implements NestInterceptor {
  intercept(
    _context: ExecutionContext,
    next: CallHandler<User>,
  ): Observable<User> | Promise<Observable<User>> {
    return next.handle().pipe(
      map(data => {
        return plainToInstance(User, data);
      }),
    );
  }
}
