import { ReactNode } from "react";

interface LayoutProps {
	children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
	return (
		<div className="flex w-screen h-screen">
			<div className=" flex-1 flex-col  h-full flex items-center justify-center">
				<div className="flex items-center justify-center h-full">
					<div className="text-right text-neutral-900 text-xl font-extrabold font-['Inter'] tracking-wider">
						C I D A D E
					</div>
					<img src="/assets/logo.png" alt="" />
					<div className="text-right text-zinc-950 text-xl font-extrabold font-['Inter'] tracking-[3.60px]">
						EST.2020
					</div>
				</div>

				<p className="text-center  py-5 text-zinc-950 text-base font-semibold font-['Inter'] tracking-[8.80px]">
					MAIOR SERVIDOR DE RP DA AMÉRICA LATINA
				</p>
			</div>
			<div
				style={{
					background:
						"linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), #11131D;",
				}}
				className="w-full bg-cda h-full flex-1"
			>
				dwwwwwwwwwwwwwwwwwwwwwwwwwwww
			</div>
		</div>
	);
}
