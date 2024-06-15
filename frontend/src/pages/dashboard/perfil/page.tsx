import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { configAxios } from "../../../api/config";
import { useContextApi } from "../../../context/useAuth";
import { useNotify } from "../../../context/useNotify";
import Header from "../../../components/header";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import BoxInfoPerfil from "../../../components/boxInfo";

export default function Page() {
	const [myQtdEmblems, setMyQtdEmblems] = useState<number>();
	const { token, user } = useContextApi();
	const { setNotify } = useNotify();

	useEffect(() => {
		const getData = async () => {
			try {
				const result = await axios.get(`/emblems/getByEmblems/${user?.email}`, {
					...configAxios,
					headers: {
						...configAxios.headers,
						authorization: `Bearer:${token}`,
					},
					params: {
						email: user?.email,
					},
				});
				setMyQtdEmblems(result.data.length);
			} catch (error: any) {
				const statusCode = error?.response?.data!.statusCode;
				const message = error?.response?.data!.message;
				if (statusCode == 429 || statusCode == 409 || statusCode == 401) {
					setNotify({
						icon: "flat-color-icons:delete-database",
						message: message,
						open: true,
					});
					return;
				}

				setNotify({
					icon: "flat-color-icons:delete-database",
					message: message[0],
					open: true,
				});
			}
		};
		getData();
	}, []);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.5 }}
			className="flex flex-col gap-5 h-[619px]"
		>
			<Header content="Meu Perfil" />

			<main className=" h-full w-full justify-center items-center flex flex-col gap-2 max-h-[619px]">
				<Icon
					icon={"teenyicons:user-circle-solid"}
					color="57658f"
					fontSize={70}
				/>

				<div className="flex flex-col gap-2">
					<BoxInfoPerfil
						content="Email:"
						icon="mdi:person"
						value={user?.email ?? ""}
					/>
					<BoxInfoPerfil
						content="Emblemas resgatados:"
						icon="mdi:cards"
						value={`${myQtdEmblems}`}
					/>
				</div>
			</main>
		</motion.div>
	);
}
