interface HeaderProps {
	content: string;
}
export default function Header({ content }: HeaderProps) {
	return (
		<header className="flex gap-2 items-center">
			<div className="w-[15px] h-[38px] bg-amber-300" />
			<div className="text-white text-2xl font-medium font-['Inter'] tracking-wide">
				{content}
			</div>
		</header>
	);
}
