import { useContext, useEffect, useRef, useState } from "react";
import { MusicContext } from "../../../Contexts/musicContext";
import PlayButton_Big from "../../Logos_and_icons/playButton_big";
import { Link } from "react-router-dom";
import ActionMenu from "../actionMenu";
import Play_button_small from "../../Logos_and_icons/playButton_small";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";
import PauseButton from "../../Logos_and_icons/pauseButton";
import { AudioContext } from "../../../Contexts/audioContext";





export default function RenderSongInFeedPage({song}) {

    const {artist, audio, image, release, songId, title}= song;

    const {myRandom, favourites, setFavourites}= useContext(MusicContext);
    const {playPause, nextSong, currentSongs, isPlaying, handleActiveSong, activeSong}= useContext(AudioContext);

    const [played, setPlayed]= useState(myRandom(4000));
    const [duration, setDuration] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [isLoaded, setIsLoaded]= useState(false);
    const [clickedFirstTime, setClickedFirstTime]= useState(false);


    const [isLiked, setIsLiked]= useState(false);

    const handleNextSong = () => {
        playPause(false);
        nextSong(Math.floor(Math.random() * currentSongs.length));
    };

    
    useEffect(() => {
        const isPresentInFavourites= favourites.find((item) => item.songId === songId);
        // console.log("favourites: ", isPresentInFavourites);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [favourites])

    const audioPlayer= useRef(null);

    if (audioPlayer.current) {
      if (isPlaying && audioPlayer.current.paused) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }

    return (
        <>
            <div id="header-for-song" className="flex items-center">
                <div className="w-[2rem] h-[2rem] rounded-full 
                    bg-gradient-to-r from-[#ccc] to-[#333]">
                        <img src={artist?.[0]?.singerImage} className="rounded-full"/>
                    </div>
                <div className="flex items-center pl-[5px] text-[14px]">
                    <p>{artist?.[0]?.name}</p>
                    <p className="pl-[5px] text-[#999]">posted a track</p>
                </div>
            </div>
            <div id="main-for-song" className="flex items-center py-[1rem]">
                <div className="w-[10rem] h-[10rem]">
                    <img src={image} alt={title} />
                </div>

                <div className="flex flex-col justify-between h-[10rem] pl-[1rem]">
                    <div className="flex items-center pt-[2rem]">
                        
                        <button className='bg-[#f50] w-[50px] h-[50px] rounded-full pl-[4px] mb-[3px]
                            flex items-center justify-center hover:bg-[#d74800]'
                            onClick={(e) => {playPause(isPlaying ? false : true); handleActiveSong(song);
                                setClickedFirstTime(!clickedFirstTime); }}>
                                    
                            {   isLoaded ?
                                (
                                    (isPlaying && songId === activeSong.songId) ? 
                                    <PauseButton width={"35px"} height={"39px"} color={"#ffffff"}/>
                                    :
                                    <PlayButton_Big width={"35px"} height={"39px"}/>
                                ) :

                                <MoreButtonLogo width={"35px"} height={"39px"} color={"#ffffff"} />
                            }

                            <audio
                                src={audio}
                                ref={audioPlayer}
                                onEnded={handleNextSong}
                                onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                                onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                            />
                        </button>
                        
                        <div className="pl-[10px] cursor-pointer">

                            <p className="text-[#999] hover:text-[#f50] hover:underline-offset-4">{artist?.[0]?.name}</p>
                            <Link to={`/song/${songId}`}>
                                <p className="hover:text-[#f50] hover:underline-offset-4">{title}</p>
                            </Link>
                            
                        </div>
                            
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <ActionMenu />
                        </div>
                        
                        <div className="flex items-center text-[12px] text-[#999] ml-[1rem] 
                            min-[768px]:ml-[2rem] min-[1024px]:ml-[4rem] min-[1200px]:ml-[12rem]">
                            <Play_button_small />
                            <p>{played}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}