import { IsEmail, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { IPackageEmblems } from '../interfaces/IPackageEmblems';
import { ApiProperty } from '@nestjs/swagger';


export class CreatePackageEmblemsDTO implements IPackageEmblems {
  @ApiProperty({ 
    required: false,
    type: Number,
    description: 'Identificador único do emblema.'
  })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ 
    type: String,
    description: 'Slug associado ao emblema.',
    example: 'nome-do-slug'
  })
  @IsNotEmpty({ message: 'Nome do slug não foi informado.' })
  slug: string;

  @ApiProperty({ 
    type: String,
    description: 'Nome do emblema.',
    example: 'Nome do Emblema'
  })
  @IsNotEmpty({ message: 'Nome do emblema não foi informado.' })
  name: string;

  @ApiProperty({ 
    type: String,
    description: 'Nome da imagem associada ao emblema.',
    example: 'https://example.com/imagem.png',
  })
  @IsNotEmpty({ message: 'Nome da imagem não foi informado.' })
  image: string;

  @ApiProperty({ 
    type: String,
    description: 'Endereço de email associado ao emblema.',
    example: 'example@email.com'
  })
  @IsEmail()
  email: string;
}