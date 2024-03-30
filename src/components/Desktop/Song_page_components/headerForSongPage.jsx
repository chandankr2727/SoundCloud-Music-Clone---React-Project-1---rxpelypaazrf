import { useContext, useEffect, useRef, useState } from "react";
import PlayButton_Big from "../../Logos_and_icons/playButton_big";
import PauseButton from "../../Logos_and_icons/pauseButton";
import { AudioContext } from "../../../Contexts/audioContext";
import SeekBar from "../Music_player/seekBar";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";




export default function HeaderForSongPage({song, date, year, month, years}) {

    const {isPlaying, playPause, nextSong, setIsPlaying, currentSongs,
        handleActiveSong}= useContext(AudioContext);

    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [isLoaded, setIsLoaded]= useState(false);
    


    const handleNextSong = () => {
        playPause(false);
        nextSong(Math.floor(Math.random() * currentSongs.length));
    };

    const audioPlayer= useRef(null);

    if (audioPlayer.current) {
      if (isPlaying && audioPlayer.current.paused) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }
  
  
    useEffect(() => {
        audioPlayer.current.currentTime = seekTime;
    }, [seekTime]);


    return (
        <div className="flex justify-between w-full bg-gradient-to-r from-[#ccc] to-[#333] 
                    p-[1.5rem] text-white">
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between w-full text-[16px] px-[1rem]">
                    <div className="flex flex-row">
                        <div className="flex items-center justify-center w-[64px] h-[62px] bg-[#f50] pt-[3px] pl-[3px] rounded-full hover:bg-[#d74800]"
                            onClick={() => {setIsPlaying(isPlaying ? false : true);
                                handleActiveSong(song);
                                }
                            }>
                            {   isLoaded ?
                                (
                                    !isPlaying ? <PlayButton_Big width={"35px"} height={"39px"}/>
                                    :
                                    <PauseButton width={"35px"} height={"39px"} color={"#ffffff"}/>
                                ) :

                                <MoreButtonLogo width={"35px"} height={"39px"} color={"#ffffff"} />
                            }

                            <audio id="audioPlayer"
                                src={song?.audio}
                                ref={audioPlayer}
                                onEnded={handleNextSong}
                                onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                                onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                            />
                        </div>
                        <div className="ml-[1rem] w-max">
                            <div className="text-[24px] bg-black mb-[10px] p-[7px]">{song?.title}</div>
                            <div className="bg-black w-fit py-[3px] px-[7px]">{song?.artist?.[0]?.name}</div>
                        </div>
                    </div>
                
                    { song.release && <p className="text-white text-[20px] pr-[1rem] font-semibold">
                            {date}-{years[+month-1]}, {year}
                        </p> }
                </div>
                {/* <div className="mr-[2rem] ml-[1.5rem]">
                    <SeekBar
                        value={appTime}
                        min="0"
                        max={duration}
                        onInput={(event) => setSeekTime(event.target.value)}
                        setSeekTime={setSeekTime}
                        appTime={appTime}
                    />
                </div> */}
            </div>

            <div className={`w-[17rem] h-[12rem] bg-gradient-to-r from-[#846170] to-[#70929c]
                min-[1024px]:w-[25rem] min-[1024px]:h-[17rem] 
                min-[1440px]:w-[30rem] min-[1440px]:h-[21rem]`}>
                <img src={song.image} className="w-full h-full"/>
            </div>
        </div>
    )
}