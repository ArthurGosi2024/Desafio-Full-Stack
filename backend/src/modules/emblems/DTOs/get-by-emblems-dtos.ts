import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class GetByEmblemsDTO {
  @ApiProperty({
    type: String,
    description: 'Slug associado aos emblemas.',
    example: 'nome-do-slug',
  })
  @IsNotEmpty({ message: 'Nome do slug não foi informado.' })
  slug: string;
}
