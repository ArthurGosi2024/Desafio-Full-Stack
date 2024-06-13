import { Module } from '@nestjs/common';
import { EmblemsController } from './emblems.controller';
import { EmblemsRepositories } from './emblems.repositories';
import { PrismaService } from 'src/prisma.service';
import { EmblemsService } from './emblems.service';
import { UserModule } from '../user/user.module';
import { UseCaseEmblemsWithUser } from './use-cases/use-case-emblems-with-user';
import { UserRepositories } from '../user/user.repositories';

@Module({
  imports: [UserModule],
  controllers: [EmblemsController],
  providers: [
    EmblemsService,
    PrismaService,
    EmblemsRepositories,
    UseCaseEmblemsWithUser,
    UserRepositories,
  ],
})
export class EmblemsModule {}
