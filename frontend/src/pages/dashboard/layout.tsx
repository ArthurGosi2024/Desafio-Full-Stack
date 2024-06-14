import { Outlet } from "react-router-dom";
import { Icon } from "@iconify/react";
import NavBar from "../../components/navBar";
import { useNotify } from "../../context/useNotify";
import { AnimatePresence, motion } from "framer-motion";
export default function LayoutDashboard() {
	// 	363F5B
	// bg-gray-900

	const { notify } = useNotify();
	return (
		<div className="h-screen overflow-hidden bg-[#0E0F17]  p-5">
			<div className="bg-[#0A0B12] relative w-full h-full p-10 flex flex-col gap-5">
			<AnimatePresence>
				{notify.open && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ ease: "easeInOut", duration: 0.5 }}
						className="bg-gray-900 m-2 p-2 absolute right-2 top-0 flex gap-[3px] items-center rounded-sm"
					>
						<Icon icon={notify.icon!} color={"#616d92"} fontSize={22}/>
						<span className="font-inter text-[#616d92] text-sm">
							{notify.message}
						</span>
					</motion.div>
				)}
			</AnimatePresence>
				<header className="flex gap-3 items-center w-full ">
					<img className="w-[101px]" src="/assets/logo.png" alt="" />

					<div className="text-white text-base font-semibold font-inter tracking-wide">
						DASHBOARD
					</div>
				</header>
				<div className="flex  h-full gap-5 ">
					<div className=" flex flex-col gap-[92px]">
						<div className=" flex flex-col gap-3  w-[240px]">
							<NavBar
								icon="mdi:cards"
								router="/dashboard/"
								color="363F5B"
								content="Meus emblemas"
							/>
							<NavBar
								color="363F5B"
								icon="ph:cards-three-fill"
								content="Resgatar Emblemas"
								router="/dashboard/getEmblems"
							/>
							<NavBar
								color="363F5B"
								icon="ic:baseline-home"
								router="/dashboard/perfil"
								content="Meu perfil"
							/>
						</div>
					</div>
					<div className="h-full flex items-center ">
						<div
							style={{
								background:
									"linear-gradient(30deg, #0A0B12 20.77%, rgba(184, 184, 184, 0.50) 51.77%, #0A0B12 100%)",
							}}
							className="w-[1px] h-3/4 "
						></div>
					</div>
					<main className="  w-full">
						<Outlet />
					</main>
				</div>
			</div>
		</div>
	);
}
