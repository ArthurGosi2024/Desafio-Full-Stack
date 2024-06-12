import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { UserRepositories } from './user.repositories';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService, PrismaService, UserRepositories],
})
export class AppModule {}
