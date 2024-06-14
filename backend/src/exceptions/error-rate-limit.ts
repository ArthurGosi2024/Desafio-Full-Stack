import { HttpStatus, Injectable } from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ErrorHttpException } from './error-http';

@Injectable()
export class ErrorRateLimit extends ThrottlerGuard {
  protected async throwThrottlingException(): Promise<void> {
    throw new ErrorHttpException(
      'Tente novamente em alguns segundos...',
      429,
    );
  }
}
