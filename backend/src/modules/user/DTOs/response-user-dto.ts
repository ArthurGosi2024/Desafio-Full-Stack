import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDTO {
  @ApiProperty({
    example: 'EKMQKMWQDMPDPWQWD.WDQMWQDMIWQDIWDQMI.WQD.DIMDMIDW.WQD.WQD.WQD',
    description: 'Token do usuario.',
  })
  acess_token: string;
  @ApiProperty({
    example: 'usernamesub@gmail.com',
    description: 'Email do usuario.',
  })
  email: string;
}
