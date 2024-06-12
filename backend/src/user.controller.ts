import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInUser } from './DTOs/signIn-user';

@Controller('signIn')
export class UserController {
  constructor(private readonly useService: UserService) {}

  @Post()
  signIn(@Body() user: SignInUser) {
    return this.useService.signIn(user);
  }
}
