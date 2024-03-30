
import React, { useRef, useEffect } from "react";

const Player = ({activeSong, isPlaying, volume, seekTime, onEnded, onTimeUpdate, onLoadedData, repeat,
}) => {

  const audioPlayer = useRef(null);
  
  
  useEffect(() => {
    if (audioPlayer.current) {
      if (isPlaying) {
        const playPromise = audioPlayer.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {}).catch((error) => {
            // Autoplay was prevented; show a UI element to let the user start playback.
            console.error('Autoplay prevented:', error);
          });
        }
      } else {
        audioPlayer.current.pause();
      }
    }
  }, [isPlaying]);


  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    audioPlayer.current.currentTime = seekTime;
  }, [seekTime]);

  return (
    <audio
      src={activeSong?.audio}
      ref={audioPlayer}
      loop={repeat}
      onEnded={onEnded}
      onTimeUpdate={onTimeUpdate}
      onLoadedData={onLoadedData}
    />
  );
};

export default Player;
