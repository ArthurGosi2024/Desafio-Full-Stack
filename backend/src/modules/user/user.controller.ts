import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInUserDTO } from '../../DTOs/signIn-user-dto';
import { RegisterUserDTO } from '../../DTOs/register-user-dto';

@Controller('')
export class UserController {
  constructor(private readonly useService: UserService) {}

  @Post('signIn')
  async signIn(@Body() user: SignInUserDTO) {
    return await this.useService.signIn(user);
  }

  @Post('register')
  async register(@Body() user: RegisterUserDTO) {
    return await this.useService.register(user);
  }
}
