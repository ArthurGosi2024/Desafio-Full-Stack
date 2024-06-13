import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma.service';
import { IEmblemsProps } from './interfaces/IEmblems';
import { IPackageEmblems } from './interfaces/IPackageEmblems';

interface IEmblemsRepositories {
  createEmblems: (emblems: IPackageEmblems) => void;
  findAll: () => Promise<IEmblemsProps[]>;
  findByEmblems: (slug: string) => Promise<IEmblemsProps | {}>;
  deleteByEmblems: (packageEmblems: IPackageEmblems) => void;
  deleteAllEmbles: () => void;
}

@Injectable()
export class EmblemsRepositories implements IEmblemsRepositories {
  constructor(private readonly prisma: PrismaService) {}

  async createEmblems({ image, name, slug, userId }: IPackageEmblems) {
    await this.prisma.emblems.create({
      data: { image, name, slug, userId: userId },
    });
  }


  async findAll(): Promise<IEmblemsProps[] | []> {
    const findAll = await this.prisma.emblems.findMany();

    if (findAll.length > 0) {
      return findAll;
    }
    return [];
  }
  async findByEmblems(slug: string): Promise<IEmblemsProps> {
    const findBy = await this.prisma.emblems.findFirst({
      where: { slug: slug },
    });

    if (findBy) {
      return findBy;
    }
  }
  async deleteByEmblems(packageEmblems : IPackageEmblems) {

    await this.prisma.emblems.delete({
      
      where: {
        id: packageEmblems.id,
        slug: packageEmblems.slug,
      },
    });
  }
  async deleteAllEmbles() {
    await this.prisma.emblems.deleteMany();
  }
}
