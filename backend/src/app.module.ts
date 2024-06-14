import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';
import { UserModule } from './modules/user/user.module';
import { EmblemsModule } from './modules/emblems/emblems.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ErrorRateLimit } from './exceptions/error-rate-limit';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: process.env.TOKEN_SECRET,
      signOptions: { expiresIn: '30m' },
    }),

    ThrottlerModule.forRoot([
      {
        ttl: 10000,
        limit: 12,
      },
    ]),
    UserModule,
    EmblemsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ErrorRateLimit
    }
    
  ],
})
export class AppModule {}
