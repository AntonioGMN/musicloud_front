export default ({ children }) => (
	<div className="flex justify-start align-center w-full h-[40px] pl-[5px] pb-[5px] ml-[40px]">
		<button className="text-[24buttonx] mr-[13px]">▶</button>
		<p className="text-[16px]">{children.title}</p>
	</div>
)