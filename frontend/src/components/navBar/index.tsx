import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

interface NavBarProps {
	color: string;
	icon: string;
	content: string;
	router: string;
}
export default function NavBar({ color, icon, content, router }: NavBarProps) {
	return (
		<div className="w-full flex flex-col gap-3 max-w-[230px]">
			<div className=" w-full  h-[34px] px-2 pt-[9px]  bg-gray-900 rounded-sm  gap-[5.60px] flex transition-colors hover:bg-gray-900/60 cursor-pointer">
				<Icon icon={icon} color={color} fontSize={18} />
				<Link
					to={router}
					className="text-white text-[13px] font-normal font-inter "
				>
					{content}
				</Link>
			</div>
		</div>
	);
}
