import { useRef, useEffect, useLayoutEffect, useState } from "react";

import usePlayer from "../../hooks/usePlayer";

import PlayerButton from "./PlayerButton";

export default function Player() {
  const audio = useRef(null);
  
  const { song, songLoading } = usePlayer();

  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(100);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (song) {
      audio.current.play();
      setPlaying(true);
    }
  }, [song]);

  useEffect(() => {
    audio.current.ondurationchange = (event) => {
      setDuration(event.target.duration);
    };

    audio.current.ontimeupdate = (event) => {
      setPosition(event.target.currentTime);
    }

    return () => {
      if (audio && audio.current) {
        audio.current.ondurationchange = () => 0;
        audio.current.ontimeupdate = () => 0;
      }
    };
  });

  function setAudioPosition(position) {
    setPosition(position);
    audio.current.currentTime = position;
  }

  function toggle() {
    if (playing) {
      setPlaying(false);
      audio.current.pause();
    } else {
      setPlaying(true);
      audio.current.play();
    }
  }

  return (
    <>
      <div className="w-[100vw] fixed bottom-[80px] left-0 h-[5px] z-30">
        <input
          type="range"
          className="w-[100%] h-[5px] appearance-none absolute"
          style={{
            backgroundImage: `linear-gradient(to right, #329f59 0%, #329f59 ${position / duration * 100}%, #0E0E0E ${position / duration * 100}%, #0E0E0E 100%)`
          }}
          min="0"
          max={Math.ceil(duration)}
          step="0.1"
          value={position}
          onChange={(e) => setAudioPosition(e.target.value)}
        />
      </div>
      <div className="w-[100vw] h-[80px] bg-gray fixed bottom-0 left-0 flex items-center justify-center z-20">
        <PlayerButton disabled={songLoading} onClick={() => toggle()} />
      </div>
      <audio ref={audio} preload="none" controls src={song} className="hidden"></audio>
    </>
  );
}
