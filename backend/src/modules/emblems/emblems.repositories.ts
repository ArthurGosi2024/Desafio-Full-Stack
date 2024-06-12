import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { IUser } from '../user/user.repositories';

interface IEmblemsProps {
  id?: number;
  slug: string;
  name: string;
  userId?: number;
  image: string;
}

interface IEmblemsRepositories {
  createEmblems: (emblems: IEmblemsProps) => void;
  createEmblemsAll: (emblems: IEmblemsProps[]) => void;
  findAll: () => Promise<IEmblemsProps[]>;
  findByEmblems: (emblems: IEmblemsProps) => Promise<IEmblemsProps | boolean>;
  deleteByEmblems: (emblems: IEmblemsProps) => void;
  deleteAllEmbles: () => void;
}

@Injectable()
export class EmblemsRepositories implements IEmblemsRepositories {
  constructor(private readonly prisma: PrismaService) {}
  async createEmblems(emblems: IEmblemsProps) {
    await this.prisma.emblems.create({ data: emblems });
  }

  async createEmblemsAll(emblems: IEmblemsProps[]) {
    await this.prisma.emblems.createMany({
      data: emblems,
      skipDuplicates: false,
    });
  }

  async findAll(): Promise<IEmblemsProps[] | []> {
    const findAll = await this.prisma.emblems.findMany();

    if (findAll.length > 0) {
      return findAll;
    }
    return [];
  }
  async findByEmblems(
    emblems: IEmblemsProps,
  ): Promise<IEmblemsProps | boolean> {
    const findBy = await this.prisma.emblems.findFirst({
      where: { slug: emblems.slug },
    });

    if (findBy) {
      return findBy;
    }

    return false;
  }
  async deleteByEmblems(emblems: IEmblemsProps) {
    await this.prisma.emblems.delete({ where: { id: emblems.id } });
  }
  async deleteAllEmbles() {
    await this.prisma.emblems.deleteMany();
  }
}
