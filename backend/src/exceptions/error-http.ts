import { HttpException, HttpStatus } from '@nestjs/common';

export class ErrorHttpException extends HttpException {
  constructor(error: string, status: HttpStatus) {
    super(error, status);
  }
}
