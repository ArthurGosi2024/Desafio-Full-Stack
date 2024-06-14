import { createContext, ReactNode, useContext, useState } from "react";
import { IAuthContext, IUser } from "../@types/IAuth";
import axios from "axios";
import { IResponse } from "../@types/IResponse";

import { configAxios } from "../api/config";

const Auth = createContext<IAuthContext>({
	signIn: () => {},
	register: () => {},
	signOut: () => {},
	token: "",
});

interface AuthProps {
	children: ReactNode;
}

export default function AuthProvider({ children }: AuthProps) {
	const [token, setToken] = useState<string>(
		localStorage.getItem("token") ?? ""
	);
	const [user, setUser] = useState<IUser>({
		email: localStorage.getItem("email") ?? "",
	});

	const signIn = async ({ email, password }: IUser): Promise<IResponse> => {
		try {
			const result = await axios.post(
				"/signIn",
				{ email, password },
				{
					...configAxios,
				}
			);

			if (result.status == 201) {
				const token = result.data.acess_token;
				setToken(token);
				localStorage.setItem("token", token);

				const email = result.data.email;
				setUser({ email: email });
				localStorage.setItem("email", email);

				return {
					status: true,
					message: result.data.massage,
				};
			}
		} catch (error: any) {
			const statusCode = error?.response?.data!.statusCode;
			const message = error?.response?.data!.message;
			if (statusCode == 429 || statusCode == 409 || statusCode == 401) {
				return {
					status: false,
					message: message,
				};
			}

			return {
				status: false,
				message: message[0],
			};
		}

		return {
			status: false,
			message: "Error de requisição",
		};
	};

	const register = async ({ email, password }: IUser): Promise<IResponse> => {
		

		try {
			const result = await axios.post(
				"/register",
				{ email, password },
				{
					...configAxios,
				}
			);
	
			if (result.status == 201) {
				const token = result.data.acess_token;
				setToken(token);
				localStorage.setItem("token", token);
	
				const email = result.data.email;
				setUser({ email: email });
				localStorage.setItem("email", email);
	
				return {
					status: true,
					message: result.data.massage,
				};
			}
			
		} catch (error : any) {
			const statusCode = error?.response?.data!.statusCode;
			const message = error?.response?.data!.message;
			if (statusCode == 429 || statusCode == 409 || statusCode == 401) {
				return {
					status: false,
					message: message,
				};
			}

			return {
				status: false,
				message: message[0],
			};
		}

		return {
			status: false,
			message: "Error de requisição",
		};
	};
	const signOut = async (token: string): Promise<IResponse> => {
		const result = localStorage.getItem("token");
		if (result == token) {
			setToken("");
			localStorage.removeItem("token");
			localStorage.removeItem("email");
			return {
				status: true,
				message: "Deslogado com sucesso",
			};
		}
		return {
			status: false,
			message: "Error de deslogamento",
		};
	};

	return (
		<Auth.Provider value={{ token, signIn, register, signOut, user }}>
			{children}
		</Auth.Provider>
	);
}

export const useContextApi = () => {
	const { ...props } = useContext(Auth);
	return { ...props };
};
