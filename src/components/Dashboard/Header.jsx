import PlayerButton from "./PlayerButton";

export default () => (
	<div className="h-full w-full">
			<div className="flex items-center h-[75px] w-[640px] ml-[40px] mt-[25px]">
				<p className="text-white text-[32px] mr-[13px]">All Songs</p>
				<PlayerButton playing={false}/>
			</div>
		</div>
)