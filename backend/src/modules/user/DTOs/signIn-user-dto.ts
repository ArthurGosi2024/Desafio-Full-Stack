import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SignInUserDTO {
  @ApiProperty({
    example: 'user@example.com',
    description: 'O email do usuário',
  })
  @IsEmail({}, { message: 'O email fornecido não é válido' })
  email: string;

  @ApiProperty({
    example: 'SenhaSegur1!',
    description:
      'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    minLength: 6,
    maxLength: 12,
    pattern:
      ' /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]+$/',
  })
  @IsNotEmpty({ message: 'A senha não pode estar vazia' })
  @MinLength(6, { message: 'A senha deve ter no mínimo 6 caracteres' })
  @MaxLength(12, { message: 'A senha deve ter no máximo 12 caracteres' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
    {
      message:
        'A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    },
  )
  password: string;
}
