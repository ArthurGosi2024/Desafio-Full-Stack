import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

interface IUser {
  email: string;
  password: string;
}

interface IUserRepositories {
  create: (user: IUser) => Promise<boolean>;
  find: (user: IUser) => Promise<IUser | boolean>;
  delete: (user: IUser) => void;
}

@Injectable()
export class UserRepositories implements IUserRepositories {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, password }: IUser): Promise<boolean> {
    this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return false;
  }
  async find(user: IUser): Promise<boolean | IUser> {
    const findUser = this.prisma.user.findFirst({
      where: { email: user.email, password: user.password },
    });

    return findUser ?? false;
  }
  async delete({ email }: IUser) {
    this.prisma.user.delete({
      where: {
        email,
      },
    });
  }
}
