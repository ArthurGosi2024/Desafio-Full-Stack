import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Input from "../../components/input";
import { Icon } from "@iconify/react";
import InfoBox from "../../components/info";
import { useNotify } from "../../context/useNotify";
import { useContextApi } from "../../context/useAuth";
import { IResponse } from "../../@types/IResponse";

export default function Register() {
	const { register } = useContextApi();

	const { setNotify, notify } = useNotify();

	const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const emailRegister = event.target.elements.emailRegister.value;
		const passwordRegister = event.target.elements.passwordRegister.value;
		const confirmPasswordRegister =
			event.target.elements?.confirmPasswordRegister.value;

		if (emailRegister == "" || !emailRegister) {
			setNotify({
				message: "O campo de email não pode ficar vazio.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		if (passwordRegister == "" || !passwordRegister) {
			setNotify({
				message: "A senha não pode ficar vazio.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		if (confirmPasswordRegister == "" || !confirmPasswordRegister) {
			setNotify({
				message: "A confirmação da senha não pode ficar vazio.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		if (passwordRegister !== confirmPasswordRegister) {
			setNotify({
				message:
					"As senhas não coincidem. Por favor, verifique e tente novamente.",
				icon: "flat-color-icons:delete-database",
				open: true,
			});
			return;
		}

		const result: IResponse | void = await register({
			email: emailRegister,
			password: passwordRegister,
		});

		if (result!) {
			setNotify({
				message: result.message,
				icon: "flat-color-icons:accept-database",
				open: true,
			});
		} else {
			setNotify({
				message: result!.message,
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
							title={"Feedbacks"}
							description={
								"O Cidade Alta RP recebe feedbacks positivos por sua imersão e comunidade ativa, mas também críticas sobre administração e problemas técnicos ocasionais."
							}
						/>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
						className="h-[350px] w-[227px] absolute top-0"
					>
						<img src="/assets/kamir.png" alt="" />
					</motion.div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 0.4 }}
						className="absolute right-0 max-2xl-medium:hidden"
					>
						<InfoBox
							title={"Famosos no Cidade Alta"}
							reverse={true}
							description={
								"No Cidade Alta RP, jogam famosos como Piuzinho, Rakin, e Coringa, que atraem grandes audiências e ajudam a popularizar o servidor."
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
							title={"Patrocínios"}
							reverse={false}
							description={
								"O Cidade Alta RP recebe apoio financeiro de empresas que patrocinam suas transmissões e eventos, o que auxilia na manutenção e crescimento da comunidade."
							}
						/>
					</motion.div>
				</div>
			</div>
			<form
				onSubmit={handlerSubmit}
				className="w-full justify-center flex h-full  flex-col gap-5 items-center"
			>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 0.8 }}
					className="w-full  flex-col gap-2 flex justify-center items-center"
				>
					<h1 className="text-white text-sm font-extrabold font-['Inter'] tracking-wide">
						FAÇA O REGISTRO AQUI
					</h1>
					<Icon icon={"guidance:down-arrow"} color="#FABA48" fontSize={30} />
				</motion.div>
				<div className="mt-4 flex flex-col  w-full justify-center items-center gap-5 ">
					<div className="flex  gap-5 max-w-[623px] w-full items-center justify-center  max-md:flex-wrap">
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ ease: "easeInOut", duration: 1, delay: 1 }}
							className="w-full"
						>
							<Input
								icon="mdi:person"
								type="email"
								name="emailRegister"
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
								name="passwordRegister"
								title="INFORME SUA SENHA AQUI"
							/>
						</motion.div>
					</div>
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ ease: "easeInOut", duration: 1, delay: 1.4 }}
						className="max-w-[423px] w-full"
					>
						<Input
							icon="mdi:password"
							type="password"
							name="confirmPasswordRegister"
							title="CONFIRME SUA SENHA AQUI"
						/>
					</motion.div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.6 }}
				>
					<Link
						to={"/"}
						className="text-white/60 text-xs font-normal font-inter underline tracking-wide"
					>
						Clique aqui se você possue login.
					</Link>
				</motion.div>

				<motion.button
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ ease: "easeInOut", duration: 1, delay: 1.8 }}
					className="w-48 h-[38px] bg-amber-300  rounded-[1px] text-white text-xs font-semibold font-['Inter'] tracking-wide"
				>
					CONTINUAR
				</motion.button>
			</form>
		</div>
	);
}
