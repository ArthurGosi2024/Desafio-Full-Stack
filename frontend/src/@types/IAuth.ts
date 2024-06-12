export interface IAuth {
	token: string;
}

export interface IUser {
	email: string;
	password: string;
}

export interface IAuthContext extends IAuth {
	token: string;
	signIn: (user: IUser) => void;
	register: (user: IUser) => void;
	signOut: (token: string) => void;
}
