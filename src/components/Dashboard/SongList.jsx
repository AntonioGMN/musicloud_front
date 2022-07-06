import SongListLayout from "../../layouts/Dashboard/SongListLayout";
import Song from "./Song";

export default ({ children }) => (
	<SongListLayout>
		{children.length > 0 ? children.map(child => {
			return (
				<Song children={child} />
			)
		}) : <div>No songs found</div>}
	</SongListLayout>
)