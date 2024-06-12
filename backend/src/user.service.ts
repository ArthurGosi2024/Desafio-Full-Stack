import { Injectable } from '@nestjs/common';
import { UserRepositories } from './user.repositories';
import { SignInUser } from './DTOs/signIn-user';

@Injectable()
export class UserService {
  constructor(private readonly repo: UserRepositories) {}
  signIn(user: SignInUser): string | boolean {

    return ;
  }
}
