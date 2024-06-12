import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import { Icon } from "@iconify/react";
import InfoBox from "../../components/info";

interface RegisterProps {}
export default function Register(props: RegisterProps) {
	return (
		<div className="h-full  flex flex-col w-full p-[34px] gap-1">
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ ease: "easeInOut", duration: 1 }}
				className=" w-full flex items-center justify-center  "
			>
				<img src="assets/mini-logo.png" alt="" />
			</motion.div>
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
						className="h-[350px] w-[227px] absolute top-0"
					>
						<img src="/assets/kamir.png" alt="" className="scale-75" />
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
			<div className="w-full justify-center flex h-full  flex-col gap-5 items-center">
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
				<form className="mt-4 flex flex-col  w-full justify-center items-center gap-5 ">
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
							title="CONFIRME SUA SENHA AQUI"
						/>
					</motion.div>
				</form>

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
			</div>
		</div>
	);
}
