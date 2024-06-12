import { IResponse } from "./IResponse";

export interface IAuth {
	token: string;
}

export interface IUser {
	email: string;
	password: string;
}

export interface IAuthContext extends IAuth {
	token: string;
	signIn: (user: IUser) => void | Promise<IResponse>;
	register: (user: IUser) => void | Promise<IResponse>;
	signOut: (token: string) => void | Promise<IResponse>;
}
