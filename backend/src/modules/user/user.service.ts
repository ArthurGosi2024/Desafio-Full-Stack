import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepositories } from './user.repositories';
import { SignInUserDTO } from './DTOs/signIn-user-dto';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserDTO } from './DTOs/register-user-dto';
import { ErrorHttpException } from '../../exceptions/error-http';
import { ResponseUserDTO } from './DTOs/response-user-dto';

@Injectable()
export class UserService {
  constructor(
    private readonly repo: UserRepositories,
    private readonly jwt: JwtService,
  ) {}

  async signIn(user: SignInUserDTO): Promise<ResponseUserDTO> {
    const findUser = await this.repo.find(user);

    if (findUser) {
      return {
        email: findUser.email,
        acess_token: await this.jwt.signAsync(user),
      };
    }

    throw new ErrorHttpException('Credenciais inválidas.', HttpStatus.CONFLICT);
  }

  async register(user: RegisterUserDTO): Promise<ResponseUserDTO> {
    const findUser = await this.repo.find(user);

    if (findUser) {
      throw new ErrorHttpException(
        'Email ja existente, por favor utilize outro.',
        HttpStatus.CONFLICT,
      );
    }

    await this.repo.create(user);

    return {
      email: user.email,
      acess_token: await this.jwt.signAsync(user),
    };
  }
}
