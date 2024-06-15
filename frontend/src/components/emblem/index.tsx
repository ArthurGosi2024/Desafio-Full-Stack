import { IEmblems } from "../../@types/IEmblems";

interface EmblemProps extends IEmblems {
	selectIndexEmblems?: number;
	index?: number;
}
export default function Emblem({
	image,
	name,
	slug,
	index,
	selectIndexEmblems,
}: EmblemProps) {
	return (
		<div
			style={{
				border:
					selectIndexEmblems === index
						? "2px solid #FABA48"
						: "2px solid transparent",
			}}
			className={`relative bg-gray-900   w-full h-full rounded-lg overflow-hidden shadow-xl  transition-colors hover:scale-105`}
		>
			<img className="w-full h-56 object-cover" src={image} alt={name} />
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-90"></div>
			<div className="absolute inset-0 flex items-center justify-center">
				<h3 className="text-white text-3xl font-bold text-center">{name}</h3>
			</div>
			<div className="absolute bottom-0 left-0 p-4">
				<span className="inline-block bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-md uppercase shadow-md">
					{slug}
				</span>
			</div>
			<div className="absolute top-0 right-0 mt-2 mr-2">
				<svg
					className="w-8 h-8 text-yellow-400"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
					<path
						fillRule="evenodd"
						d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8 6a1 1 0 1 1 2 0v5a1 1 0 0 1-2 0V6zm2 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
		</div>
	);
}
