import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './modules/user/user.module';
import { EmblemsModule } from './modules/emblems/emblems.module';
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '24h' },
    }),

    ThrottlerModule.forRoot([
      {
        ttl: 50000,
        limit: 12,
      },
    ]),
    UserModule,
    EmblemsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
