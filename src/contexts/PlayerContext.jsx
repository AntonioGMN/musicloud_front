import { useState, useEffect, createContext } from 'react';

import useSong from '../hooks/api/useSong';
import { useToken } from '../hooks/useToken';

const PlayerContext = createContext();
export default PlayerContext;

export function PlayerProvider ({ children }) {
  const [songId, setSongId] = useState(null);
  const { song, loadSong, songLoading } = useSong();
  const token = useToken();

  useEffect(() => {
    if (songId !== null) {
      loadSong(songId, token);
    }
  }, [songId]);

  return (
    <PlayerContext.Provider value={{ song, songId, setSongId, songLoading }}>
      {children}
    </PlayerContext.Provider>
  );
}
