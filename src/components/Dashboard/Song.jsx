import SongButton from "./SongButton";

export default ({ children }) => (
	<div className="flex justify-start items-center w-full h-[40px] pl-[5px] pb-[5px] ml-[40px] border-1 border-white border-solid border-b[650px] rounded-none ">
		<SongButton playing={false}/>
		<p className="text-[16px]">{children.title}</p>
	</div>
)
