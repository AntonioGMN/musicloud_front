import { useRef, useEffect, useState } from 'react';

import usePlayer from '../hooks/usePlayer';

import Play from './Icons/Play';
import Pause from './Icons/Pause';

export default function Player () {
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
    };

    return () => {
      audio.current.ondurationchange = () => 0;
      audio.current.ontimeupdate = () => 0;
    };
  });

  function setAudioPosition (position) {
    setPosition(position);
    audio.current.currentTime = position;
  }

  function toggle () {
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
        <button disabled={songLoading} onClick={() => toggle()} type="button" className="text-white bg-green hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          {!playing && <Play width={28} height={28} />}
          {playing && <Pause width={28} height={28} />}
        </button>
      </div>
      <audio ref={audio} preload="none" controls src={song} className="hidden"></audio>
    </>
  );
}
