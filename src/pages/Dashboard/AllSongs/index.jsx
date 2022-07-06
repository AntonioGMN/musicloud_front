import UserContext from "../../../contexts/UserContext";

import SongList from "../../../components/Dashboard/SongList";
import Header from "../../../components/Dashboard/Header";

export default function AllSongs() {
	const songs = [{id: 1, title: "Song 1"}, {id: 2, title: "Song 2"}, {id: 3, title: "Song 3"}];
	return (
		<div className="w-[820px] h-[120px]">
			<Header />
			<SongList children={songs} />
		</div>
	);
}
