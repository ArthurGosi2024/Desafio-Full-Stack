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
  async create(user: IUser) {
    await this.prisma.user.create({
      data: {
        ...user,
      },
    });
  }
  async find(user: Partial<IUser>): Promise<IUser> {
    const findUser = await this.prisma.user.findFirst({
      where: { ...user },
    });
    return findUser;
  }
  async delete({ email }: IUser) {
    await this.prisma.user.delete({
      where: {
        email,
      },
    });
  }
}
