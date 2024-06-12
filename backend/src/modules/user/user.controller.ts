import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInUser } from '../../DTOs/signIn-user';
import { RegisterUser } from '../../DTOs/register-user';

@Controller('')
export class UserController {
  constructor(private readonly useService: UserService) {}

  @Post('signIn')
  async signIn(@Body() user: SignInUser) {
    return await this.useService.signIn(user);
  }

  @Post('register')
  async register(@Body() user: RegisterUser) {
    return await this.useService.register(user);
  }
}
