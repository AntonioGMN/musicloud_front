import SongButton from "./SongButton";

export default ({ children }) => (
	<div className="flex justify-start items-center h-[40px] w-fit max-w-[840px] min-w-[120px] pr-[7px] ml-[40px] mb-[12px] border-1 pb-3 border-light border-solid border-b rounded-none ">
		<SongButton playing={false}/>
		<p className="text-[16px]">{children.title}</p>
	</div>
)
