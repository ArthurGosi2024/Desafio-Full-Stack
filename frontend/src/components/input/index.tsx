import { Icon } from "@iconify/react";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	title: string;
	icon: string;
}
export default function Input({ title, icon, ...props }: InputProps) {
	return (
		<div className="w-full  flex flex-col gap-3">
			<div className="flex gap-1 items-center ">
				<div className="w-[15px] h-[29px] bg-amber-300" />
				<div className="text-white text-xs font-semibold font-['Inter'] tracking-wide">
					{title}
				</div>
			</div>

			<div className="flex relative  items-center justify-start  w-full">
				<input
					{...props}
					className="outline-0  border-none w-full  h-[40px] pl-9 pr-1 bg-background-input rounded-md text-[#57658f] text-sm font-inter "
				/>
				<div className="absolute flex gap-1 items-center justify-center">
					<Icon icon={icon} color="#363F5B" fontSize={23} className=" ml-1" />
					<div className="w-[1px] h-[25px]  bg-slate-700"></div>
				</div>
			</div>
		</div>
	);
}
