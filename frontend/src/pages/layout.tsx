import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div className="flex w-screen  min-h-screen  overflow-hidden">
			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 100 }}
				transition={{ ease: "easeInOut", duration: 1 }}
				className="w-2/4 flex-col  min-h-full flex items-center justify-center px-5 max-2xl:hidden"
			>
				<div className=" flex items-center justify-center gap-9 w-full h-full ">
					<div className=" text-neutral-900 text-xl font-extrabold font-['Inter'] tracking-wider  max-2xl:text-sm  ">
						C I D A D E
					</div>
					<img src="/assets/logo.png" alt="" className="max-w-[150px] w-full" />
					<div className=" text-zinc-950 text-xl font-extrabold font-['Inter'] tracking-wider  max-2xl:text-sm ">
						E S T.2020
					</div>
				</div>
				<div className="flex overflow-hidden py-5 ">
					{"MAIOR SERVIDOR DE RP DA AMÉRICA LATINA"
						.split("")
						.map((char, index) => (
							<>
								<motion.span
									initial={{ opacity: 0, y: 100 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: 100 }}
									transition={{
										ease: "easeInOut",
										delay: index * 0.25,
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
