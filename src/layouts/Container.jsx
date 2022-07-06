export default function Container({ children }) {
	return (
		<div className="container flex h-screen w-full from-slate-800 flex-col justify-center items-center font-body bg-gradient-to-b from-gray-light to-gray-dark text-white">
			{children}
		</div>
	);
}