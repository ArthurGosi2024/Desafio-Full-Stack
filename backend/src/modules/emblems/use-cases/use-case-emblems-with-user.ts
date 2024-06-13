// asssociar um emblema ao um usuario

import { HttpStatus, Injectable } from '@nestjs/common';
import { EmblemsRepositories } from '../emblems.repositories';
import { ErrorHttpException } from 'src/exceptions/error-http';
import { IPackageEmblems } from '../interfaces/IPackageEmblems';
import { UserRepositories } from 'src/modules/user/user.repositories';

@Injectable()
export class UseCaseEmblemsWithUser {
  constructor(
    private readonly emblemsRepositories: EmblemsRepositories,
    private readonly userRepositories: UserRepositories,
  ) {}

  async addBadgeToUser(packageEmblems: IPackageEmblems): Promise<boolean> {
    const findUser = await this.userRepositories.find({
      email: packageEmblems.email,
    });
    const emblems = await this.emblemsRepositories.findByEmblems(
      packageEmblems.slug,
    );

    if (emblems && emblems.userId == findUser.id) {
      throw new ErrorHttpException(
        'Voce já possue este emblema, portanto, desconsidere seus resgate.',
        HttpStatus.CONFLICT,
      );
    }

    await this.emblemsRepositories.createEmblems({
      ...packageEmblems,
      userId: findUser.id,
    });
    throw new ErrorHttpException(
      'Emblema resgatado com sucesso.',
      HttpStatus.ACCEPTED,
    );
  }
  async removeUserEmblem(packageEmblems: IPackageEmblems) {

    const findUser = await this.userRepositories.find({
      email: packageEmblems.email,
    });
    const emblems = await this.emblemsRepositories.findByEmblems(
      packageEmblems.slug,
    );
    
    if (emblems && findUser.id == emblems.userId) {
      await this.emblemsRepositories.deleteByEmblems({
        ...packageEmblems,
        id : emblems.id,
        userId: null,
      });
      throw new ErrorHttpException(
        'Emblema removido com sucesso.',
        HttpStatus.ACCEPTED,
      );
    }

    throw new ErrorHttpException(
      'Este emblema não pertece a voce mais...',
      HttpStatus.NOT_FOUND,
    );
  }
}
