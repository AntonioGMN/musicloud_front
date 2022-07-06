import { useContext } from "react";

import PlayerContext from "../contexts/PlayerContext";

export default function usePlayer() {
  const data = useContext(PlayerContext);
  return data;
}
