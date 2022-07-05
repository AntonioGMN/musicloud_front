export default function Button({ children, onClick, fullWidth }) {
	return (
		<button
			className='bg-transparent border border-slate-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
			onClick={onClick}
			fullWidth={fullWidth}
		>
			{children}
		</button>
	);
}
