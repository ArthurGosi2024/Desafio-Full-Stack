import { IUser } from 'src/modules/user/user.repositories';
import { IEmblemsProps } from './IEmblems';

type IJoinEmblemsAndIUser = IEmblemsProps & Partial<IUser>;

export interface IPackageEmblems extends IJoinEmblemsAndIUser {}
