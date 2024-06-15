import { Icon } from "@iconify/react";

interface BoxInfoPerfilProps {
     icon: string; 
     content: string; 
     value: string;
}
export default function BoxInfoPerfil({ content , icon, value}: BoxInfoPerfilProps) {
	return (
		<div className="flex flex-col gap-2">
			<div className="text-sm text-[#363F5B] font-inter">{content}</div>
			<div className=" h-[40px] p-[2px] px-2 bg-background-input rounded-md text-[#57658f] text-sm font-inter  flex items-center gap-1">
				<div className=" flex  items-center h-full ">
					<Icon
						icon={icon}
						color="#363F5B"
						fontSize={23}
						className=" ml-1"
					/>
					<div className="text-base text-[#363F5B] font-inter">|</div>
				</div>

				<div className="text-sm text-[#363F5B] font-inter">{value}</div>
			</div>
		</div>
	);
}
