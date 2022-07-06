import SongListLayout from "../../layouts/Dashboard/SongListLayout";
import Song from "./Song";

export default ({ children }) => (
	<SongListLayout>
		{children.map(child => {
			return (
				<Song children={child} />
			)
		})}
	</SongListLayout>
)