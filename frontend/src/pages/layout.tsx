import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import { useNotify } from "../context/useNotify";
import { Icon } from "@iconify/react";

export default function Layout() {
	const { notify } = useNotify();
	return (
		<div className="flex w-screen  min-h-screen bg-[#E7E5E4] overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 100 }}
				transition={{ ease: "easeInOut", duration: 1 }}
				className="w-2/4 flex-col  min-h-full flex items-center justify-center px-5 max-2xl:hidden"
			>
				<AnimatePresence>
					{notify.open ? (
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 100 }}
							transition={{ ease: "easeInOut", duration: 0.5 }}
							className="h-full flex justify-center items-center flex-col gap-2  w-full"
						>
							<Icon icon={notify.icon!} color="" fontSize={40} />

							<span className="text-neutral-900 text-sm w-3/4 font-medium font-['Inter'] text-center   max-2xl:text-sm ">
								{notify.message}
							</span>
						</motion.div>
					) : (
						<div className="h-full">
							<motion.div
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 100 }}
								transition={{ ease: "easeInOut", duration: 0.5 }}
								className=" flex items-center justify-center gap-9 w-full h-full "
							>
								<div className=" text-neutral-900 text-xl font-extrabold font-['Inter'] tracking-wider  max-2xl:text-sm  ">
									C I D A D E
								</div>
								<img
									src="/assets/logo.png"
									alt=""
									className="max-w-[150px] w-full"
								/>
								<div className=" text-zinc-950 text-xl font-extrabold font-['Inter'] tracking-wider  max-2xl:text-sm ">
									E S T.2020
								</div>
							</motion.div>
						</div>
					)}
				</AnimatePresence>
				<div className="flex overflow-hidden py-5 ">
					{!notify.open &&
						"MAIOR SERVIDOR DE RP DA AMÉRICA LATINA"
							.split("")
							.map((char, index) => (
								<>
									<motion.span
										initial={{ opacity: 0, y: 100 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 100 }}
										transition={{
											ease: "easeInOut",
											delay: index * 0.15,
											duration: 0.5,
										}}
										className="text-center  text-zinc-950 text-xs   font-normal font-['Inter'] tracking-[4.80px] "
									>
										{char}
									</motion.span>
									<>{char === " " && <div className="w-2" />} </>
								</>
							))}
				</div>
			</motion.div>

			<div className=" bg-cda w-full min-h-full">{<Outlet />}</div>
		</div>
	);
}
