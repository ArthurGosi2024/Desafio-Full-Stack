import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useState } from "react";
import { IEmblems } from "../../../@types/IEmblems";
import { configAxios } from "../../../api/config";
import { useContextApi } from "../../../context/useAuth";
import { useNotify } from "../../../context/useNotify";
import { emblems } from "../../../config/emblems";

import axios from "axios";
import Emblem from "../../../components/emblem";

export default function GetEmblems() {
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [selectIndexEmblems, setSelectIndexEmblems] = useState<number>(-1);

	const { setNotify } = useNotify();
	const { token, user } = useContextApi();
	const itemsPerPage = 6;

	const paginate = (
		array: IEmblems[],
		page_size: number,
		page_number: number
	) => {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	};

	const currentEmblems = paginate(emblems, itemsPerPage, currentPage);

	const totalPages = Math.ceil(emblems.length / itemsPerPage);

	const handlerClick = () => {
		let lasTime = 0;
		const interval = setInterval(async () => {
			const random = Math.floor(Math.random() * emblems.length);

			setSelectIndexEmblems(random);

			lasTime += 250;

			const finalzy = (lasTime * emblems.length) / 250 / 10 == emblems.length;

			if (finalzy) {
				clearInterval(interval);

				const emblemsSelected = emblems[random];

				try {
					const result = await axios.post(
						"emblems/createUserEmblems",
						{
							...emblemsSelected,
							email: user?.email,
						},
						{
							...configAxios,
							headers: {
								...configAxios.headers,
								authorization: `Bearer:${token}`,
							},
						}
					);

					setNotify({
						icon: "flat-color-icons:delete-database",
						message: result.data.message,
						open: true,
					});
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
			}
		}, 250);
	};
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.5 }}
			className="flex flex-col gap-5 h-[619px]"
		>
			<header className="flex gap-2 items-center">
				<div className="w-[15px] h-[38px] bg-amber-300" />
				<div className="text-white text-2xl font-medium font-['Inter'] tracking-wide">
					Resgatar Emblemas
				</div>
			</header>

			{currentEmblems.length > 0 ? (
				<main className="max-h-[619px] justify-center items-center grid grid-cols-3 w-full gap-6 h-full">
					{currentEmblems.map(({ ...rest }, index) => (
						<Emblem
							key={index}
							{...rest}
							index={index}
							selectIndexEmblems={selectIndexEmblems}
						/>
					))}
				</main>
			) : (
				<main className=" h-full w-full justify-center items-center flex flex-col gap-2 ">
					<Icon icon={"ph:cards-three-fill"} fontSize={30} color="#363F5B" />
					<div className="text-[#363F5B] text-lg font-normal font-['Inter'] tracking-wide">
						Você não possue emblemas
					</div>
				</main>
			)}

			{totalPages > 0 && (
				<footer className="w-full flex items-center justify-end gap-3">
					<div className="flex items-center justify-end">
						<span className="font-inter text-white text-base">Páginas</span>
					</div>
					<div className="flex items-center justify-center gap-2">
						<button
							className="w-[30px] h-[33px] flex items-center justify-center rounded-md bg-gray-900"
							disabled={currentPage === 1}
							onClick={() => setCurrentPage(currentPage - 1)}
						>
							<span className="font-inter text-[#363F5B] text-lg">{"<"}</span>
						</button>
						{Array.from({ length: totalPages }, (_, i) => (
							<button
								key={i}
								className={`w-[30px] h-[33px] flex items-center justify-center rounded-md ${
									currentPage === i + 1 ? "bg-amber-300" : "bg-gray-900"
								}`}
								onClick={() => setCurrentPage(i + 1)}
							>
								<span
									className={`font-inter text-lg ${
										currentPage === i + 1 ? "text-white" : "text-[#363F5B]"
									}`}
								>
									{i + 1}
								</span>
							</button>
						))}
						<button
							className="w-[30px] h-[33px] flex items-center justify-center rounded-md bg-gray-900"
							disabled={currentPage === totalPages}
							onClick={() => setCurrentPage(currentPage + 1)}
						>
							<span className="font-inter text-[#363F5B] text-lg">{">"}</span>
						</button>
						<button
							onClick={handlerClick}
							className={` h-[33px] flex px-2 items-center justify-center rounded-md bg-amber-300 transition-colors hover:bg-amber-300/80`}
						>
							<span
								className={`text-white text-sm font-semibold font-['Inter'] tracking-wide`}
							>
								Resgatar Emblema
							</span>
						</button>
					</div>
				</footer>
			)}
		</motion.div>
	);
}
