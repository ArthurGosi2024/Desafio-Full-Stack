import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignInUserDTO } from './DTOs/signIn-user-dto';
import { RegisterUserDTO } from './DTOs/register-user-dto';
import { ThrottlerGuard } from '@nestjs/throttler';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@UseGuards(ThrottlerGuard)
@ApiTags('Login -  Endpoints para autenticação de usuários')
@Controller('')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Login do usuário' })
  @ApiBody({ type: SignInUserDTO })
  @ApiResponse({ status: 201, description: 'Usuário autenticado com sucesso.' })
  @ApiResponse({
    status: 409,
    description: 'Credenciais inválidas ou erro de validação.',
  })
  @Post('signIn')
  async signIn(@Body() user: SignInUserDTO) {
    return await this.userService.signIn(user);
  }

  @ApiOperation({ summary: 'Registrar novo usuário' })
  @ApiBody({ type: RegisterUserDTO })
  @ApiResponse({
    status: 201,
    description: 'Retorna o token de acesso para usuário.',
  })
  @ApiResponse({
    status: 409,
    description: 'Email ja existente, por favor utilize outro.',
  })
  @Post('register')
  async register(@Body() user: RegisterUserDTO) {
    return await this.userService.register(user);
  }
}
