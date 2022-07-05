export default function Input({ label, type, fullWidth, value, onChange }) {
	return (
			<input
				className="bg-transparent border border-slate-400 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
				label={label}
				type={type}
				value={value}
				onChange={onChange}
				fullWidth={fullWidth}
			/>
	);
}