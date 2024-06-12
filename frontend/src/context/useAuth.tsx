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
	const [token, setToken] = useState<string>("");
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
				setToken(result.data.token);
				return {
					status: true,
					message: result.data.massage,
				};
			}
		} catch (error: any) {
			return {
				status: false,
				message: error?.response?.data!.message[0],
			};
		}

		return {
			status: false,
			message: "Error de requisição",
		};
	};

	const register = async ({ email, password }: IUser): Promise<IResponse> => {
		const result = await axios.post(
			"/register",
			{ email, password },
			{
				...configAxios,
			}
		);

		if (result.status == 201) {
			setToken(result.data.token);
			return {
				status: true,
				message: result.data.massage,
			};
		}
		return {
			status: false,
			message: result.data.massage,
		};
	};
	const signOut = async (token: string): Promise<IResponse> => {
		const result = await axios.post("/signOut", {
			data: { token: token },
			...configAxios,
		});

		if (result.status == 201) {
			setToken("");
			return {
				status: true,
				message: result.data.massage,
			};
		}
		return {
			status: false,
			message: result.data.massage,
		};
	};
	return (
		<Auth.Provider value={{ token, signIn, register, signOut }}>
			{children}
		</Auth.Provider>
	);
}

export const useContextApi = () => {
	const { ...props } = useContext(Auth);
	return { ...props };
};
