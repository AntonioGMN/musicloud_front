import SongListLayout from '../../layouts/Dashboard/SongListLayout';
import Song from './Song';

export default ({ songs }) => (
  <SongListLayout>
    {songs.length > 0
      ? songs.map(song => {
        return (
          <Song key={song.id} title={song.title} />
        );
      })
      : <div>No songs found</div>}
  </SongListLayout>
);
