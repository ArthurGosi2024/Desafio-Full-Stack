import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';

export interface IUser {
  id?: number;
  email: string;
  password: string;
}

interface IUserRepositories {
  create: (user: IUser) => void;
  find: (user: IUser) => Promise<IUser>;
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
  async find(user: Partial<IUser>): Promise<IUser> {
    const findUser = this.prisma.user.findFirst({
      where: { ...user },
    });
    return findUser;
  }
  async delete({ email }: IUser) {
    this.prisma.user.delete({
      where: {
        email,
      },
    });
  }
}
