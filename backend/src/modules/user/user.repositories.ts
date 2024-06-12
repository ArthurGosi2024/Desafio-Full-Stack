import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

interface IUser {
  email: string;
  password: string;
}

interface IUserRepositories {
  create: (user: IUser) => void;
  find: (user: IUser) => Promise<IUser | boolean>;
  delete: (user: IUser) => void;
}

@Injectable()
export class UserRepositories implements IUserRepositories {
  constructor(private readonly prisma: PrismaService) {}
  async create({ email, password }: IUser) {
    this.prisma.user.create({
      data: {
        email,
        password,
      },
    });
  }
  async find(user: IUser): Promise<boolean | IUser> {
    const findUser = this.prisma.user.findFirst({
      where: { email: user.email },
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
