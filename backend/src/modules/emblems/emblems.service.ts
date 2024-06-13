import { HttpStatus, Injectable } from '@nestjs/common';
import { EmblemsRepositories } from './emblems.repositories';
import { ErrorHttpException } from 'src/exceptions/error-http';
import { IEmblemsProps } from './interfaces/IEmblems';
import { UseCaseEmblemsWithUser } from './use-cases/use-case-emblems-with-user';
import { IPackageEmblems } from './interfaces/IPackageEmblems';

@Injectable()
export class EmblemsService {
  constructor(
    private readonly emblemsRepositories: EmblemsRepositories,
    private readonly emblemsUserCase: UseCaseEmblemsWithUser,
  ) {}

 
  async getAllEmblems(): Promise<IEmblemsProps[] | []> {
    const findAll = await this.emblemsRepositories.findAll();

    if (findAll.length == 0) {
      throw new ErrorHttpException(
        'Não foi encontrado, nenhum emblema.',
        HttpStatus.NOT_FOUND,
      );
    }
    return findAll;
  }

  async getByEmblems(slug: string): Promise<IEmblemsProps | {}> {
    const find = await this.emblemsRepositories.findByEmblems(slug);

    if (!find) {
      throw new ErrorHttpException(
        'Não foi encontrado, nenhum emblema.',
        HttpStatus.NOT_FOUND,
      );
    }
    return find ?? false;
  }


  async createEmblemsUser(packageEmblems: IPackageEmblems) {
    return await this.emblemsUserCase.addBadgeToUser(packageEmblems);
  }

  async removerEmblemsUser(packageEmblems: IPackageEmblems) {
    return await this.emblemsUserCase.removeUserEmblem(packageEmblems);
  }
}
