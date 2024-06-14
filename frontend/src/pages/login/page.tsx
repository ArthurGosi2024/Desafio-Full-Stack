import { AnimatePresence, motion } from "framer-motion";
import InfoBox from "../../components/info";
import { Icon } from "@iconify/react";
import Input from "../../components/input";
import { Link } from "react-router-dom";
import { useContextApi } from "../../context/useAuth";
import { useNotify } from "../../context/useNotify";
import { IResponse } from "../../@types/IResponse";

export default function Login() {
	const { signIn } = useContextApi();

	const { setNotify, notify } = useNotify();

	const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const email = event.target.elements?.email.value;
		const password = event.target.elements?.password.value;

		if (email == "" || !email) {
			setNotify({
				message: "O campo de email não pode ficar vazio.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		if (password == "" || !password) {
			setNotify({
				message: "O campo de senha não pode ficar vazio.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		const result: IResponse | void = await signIn({
			email: email,
			password: password,
		});

		if (result?.status) {
			setNotify({
				message: result.message,
				icon: "flat-color-icons:accept-database",
				open: true,
			});
		} else {
			setNotify({
				message: result?.message,
				icon: "flat-color-icons:delete-database",
				open: true,
			});
		}
	};

	return (
		<div className="h-full flex flex-col w-full p-[34px] gap-1 relative max-sm:px-[10px]">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeInOut", duration: 1 }}
				className=" w-full flex items-center justify-center  "
			>
				<img src="assets/mini-logo.png" alt="" />
			</motion.div>

			<AnimatePresence>
				{notify.open && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						transition={{ ease: "easeInOut", duration: 1 }}
						className="hidden absolute max-2xl:flex max-2xl:bottom-2  items-center gap-1   right-0  mr-2 "
					>
						<Icon icon={notify.icon!} color="" fontSize={20} />
						<span className="text-sm text-white font-medium font-['Inter'] text-center ">
							{notify.message}
						</span>
					</motion.div>
				)}
			</AnimatePresence>
			<div className=" flex  h-full justify-center flex-col items-center  max-lg:hidden">
				<div className="flex relative w-full  max-w-[900px] h-[350px] justify-center items-center ">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.2 }}
						className="absolute top-0 left-0  max-2xl-medium:hidden"
					>
						<InfoBox
							title={"História do Cidade Alta RP "}
							description={
								"O Cidade Alta RP é um servidor de roleplay (RP) de GTA V, focado em simular a vida real dentro do jogo, criado pelo influenciador brasileiro Paulo Neto, conhecido como 'Piuzinho', em 2020."
							}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
						className="h-[463px] w-[227px] absolute "
					>
						<img src="/assets/alok.png" alt="" className=" scale-75" />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
						className="absolute right-0 max-2xl-medium:hidden"
					>
						<InfoBox
							title={"Tempo de FiveM"}
							reverse={true}
							description={
								"O Cidade Alta RP está no FiveM desde 2020 e tornou-se um dos principais servidores de roleplay do Brasil, com uma comunidade ativa e eventos frequentes que mantêm os jogadores engajados."
							}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.6 }}
						className="absolute  left-0 bottom-0 max-2xl-medium:hidden"
					>
						<InfoBox
							title={"Streamers "}
							reverse={false}
							description={
								"As streams no Cidade Alta RP na Twitch popularizaram o servidor e expandiram sua comunidade, com destaque para influenciadores como Piuzinho."
							}
						/>
					</motion.div>
				</div>
			</div>
			<form
				onSubmit={handlerSubmit}
				className="w-full h-full justify-center flex flex-col gap-5 items-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
					className="w-full  flex-col gap-2 flex justify-center items-center"
				>
					<h1 className="text-white text-sm font-extrabold font-['Inter'] tracking-wide">
						FAÇA O LOGIN AQUI
					</h1>
					<Icon icon={"guidance:down-arrow"} color="#FABA48" fontSize={30} />
				</motion.div>
				<div className="mt-4 flex flex-col max-w-[423px] w-full justify-center items-center gap-5">
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
						className="w-full"
					>
						<Input
							icon="mdi:person"
							type="email"
							name="email"
							title="INFORME SEU EMAIL AQUI"
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 1.2 }}
						className="w-full"
					>
						<Input
							icon="mdi:password"
							type="password"
							name="password"
							title="INFORME SUA SENHA AQUI"
						/>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
				>
					<Link
						to={"/register"}
						className="text-white/60 text-xs font-normal font-inter underline tracking-wide"
					>
						Clique aqui se você não possue cadastro.
					</Link>
				</motion.div>

				<motion.button
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.6 }}
					className="w-48 h-[38px] bg-amber-300  rounded-[1px] text-white text-xs font-semibold font-['Inter'] tracking-wide"
				>
					CONTINUAR
				</motion.button>
			</form>
		</div>
	);
}
