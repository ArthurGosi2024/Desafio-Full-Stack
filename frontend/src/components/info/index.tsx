interface IInfoProps {
	title: string;
	description: string;
	reverse?: boolean;
}
export default function InfoBox({
	title = "História do Cidade Alta RP ",
	description = "O Cidade Alta RP é um servidor de roleplay (RP) de GTA V, focado em simular a vida real dentro do jogo, criado pelo influenciador brasileiro Paulo Neto, conhecido como 'Piuzinho', em 2020.",
	reverse = false,
}: IInfoProps) {
	return (
		<div
			className="flex gap-2 data-[reverse=true]:flex-row-reverse"
			data-reverse={reverse}
		>
			<div className="w-[15px] h-[89px] bg-amber-300 " />
			<div
				className="text-left flex flex-col gap-1 data-[reverse=true]:text-right"
				data-reverse={reverse}
			>
				<h2 className=" text-stone-200 text-xl font-extrabold font-['Inter'] tracking-wide max-2xl:text-lg max-sm:text-sm max-md:text-base">
					{title}
				</h2>
				<div className="w-[300px] text-stone-200 text-[11px] font-medium font-['Inter'] tracking-wide">
					{description}
				</div>
			</div>
		</div>
	);
}
