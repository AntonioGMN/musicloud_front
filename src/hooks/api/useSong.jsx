import useAsync from "../useAsync";

import * as songApi from "../../services/songApi";

export default function useSong() {
  const {
    loading: songLoading,
    error: songError,
    act: loadSong,
    data: song
  } = useAsync(songApi.getSong, false);

  return {
    song,
    songLoading,
    songError,
    loadSong
  };
}
