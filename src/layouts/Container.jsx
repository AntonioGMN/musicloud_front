export default function Container({ children }) {
	return (
		<div className="container flex h-screen w-full from-slate-800">
			{children}
		</div>
	);
}