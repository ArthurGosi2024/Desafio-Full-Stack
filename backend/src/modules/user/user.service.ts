import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepositories } from './user.repositories';
import { SignInUserDTO } from './DTOs/signIn-user-dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDTO } from './DTOs/register-user-dto';
import { ErrorHttpException } from '../../exceptions/error-http';

@Injectable()
export class UserService {
  constructor(
    private readonly repo: UserRepositories,
    private readonly jwt: JwtService,
  ) {}

  async signIn(user: SignInUserDTO): Promise<{ acess_token: string }> {
    const findUser = await this.repo.find(user);

    if (findUser) {
      return {
        acess_token: await this.jwt.signAsync(user),
      };
    }

    throw new ErrorHttpException(
      'Credenciais inválidas ou erro de validação.',
      HttpStatus.CONFLICT,
    );
  }

  async register(user: RegisterUserDTO): Promise<{ acess_token: string }> {
    const findUser = await this.repo.find(user);

    if (findUser) {
      throw new ErrorHttpException(
        'Email ja existente, por favor utilize outro.',
        HttpStatus.CONFLICT,
      );
    }

    await this.repo.create(user);

    return {
      acess_token: await this.jwt.signAsync(user),
    };
  }
}
