import { useContext, useRef, useState } from "react";
import Filled_heart from "../../Logos_and_icons/filledHeart";
import Play_button_small from "../../Logos_and_icons/playButton_small";
import Repost from "../../Logos_and_icons/repost";
import { MusicContext } from "../../../Contexts/musicContext";
import Comment from "../../Logos_and_icons/comment";
import PauseButton from "../../Logos_and_icons/pauseButton";
import PlayButton_Big from "../../Logos_and_icons/playButton_big";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";
import { AudioContext } from "../../../Contexts/audioContext";
import { Link } from "react-router-dom";





export default function FollowingTabForProfilePage({song}) {

    const {image, audio, title, songId}= song;

    const {myRandom}= useContext(MusicContext);
    const {playPause, nextSong, currentSongs, isPlaying, handleActiveSong, activeSong}= useContext(AudioContext);


    const [played, setPlayed]= useState(myRandom(500));
    const [liked, setLiked]= useState(myRandom(80));
    const [repost, setRepost]= useState(myRandom(100));
    const [comments, setComments]= useState(myRandom(10));


    const [duration, setDuration] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [isLoaded, setIsLoaded]= useState(false);



    const audioPlayer= useRef(null);

    if (audioPlayer.current) {
      if (isPlaying && audioPlayer.current.paused) {
        audioPlayer.current.play();
      } else {
        audioPlayer.current.pause();
      }
    }

    const handleNextSong = () => {
        playPause(false);
        nextSong(Math.floor(Math.random() * currentSongs.length));
    };

    return (
        <>
            <div className="relative w-[50px] h-[50px] bg-gradient-to-r from-[#70929c] to-[#846170] cursor-pointer">
                <img src={image} alt={title} />

                <div className={`absolute w-full h-full flex flex-col items-center justify-end 
                    top-0 left-0 right-[25%] bottom-0 opacity-0 
                    hover:opacity-100`}>
                    <button className='bg-[#f50] absolute bottom-[7%] w-[37px] h-[37px] rounded-full pl-[4px] mb-[3px]
                        flex items-center justify-center hover:bg-[#d74800]'
                        onClick={(e) => {playPause(isPlaying ? false : true); handleActiveSong(song);}}>
                        {   isLoaded ?
                            (
                                (isPlaying && songId === activeSong.songId) ? 
                                <PauseButton width={"35px"} height={"39px"} color={"#ffffff"}/>
                                :
                                <PlayButton_Big width={"35px"} height={"39px"}/>
                            ) :

                            <MoreButtonLogo width={"35px"} height={"39px"} color={"#ffffff"} />
                        }
                    </button>

                    <audio
                        src={audio}
                        ref={audioPlayer}
                        onEnded={handleNextSong}
                        onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                        onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                    />
                </div>
            </div>

            <div className="ml-[10px] text-[14px] leading-[1.25]">
                <Link to={`/song/${songId}`}>
                    <p className="text-[#111] hover:text-[#f50]">{title}</p>
                </Link>

                <div className="flex item-center text-[11px] mt-[5px] font-semibold">
                    <div className="flex items-center">

                        <Play_button_small width= {"18px"} height= {"18px"}/> 
                        
                        <p className="ml-[2px]">
                            {played}k
                        </p>
                    </div>

                    <div className="flex items-center ml-[10px]">
                        
                        <Filled_heart width= {"13px"} height= {"13px"} />
                        
                        <p className="ml-[5px]">
                            {liked}k
                        </p>
                    </div>

                    <div className="flex items-center ml-[10px]">
                        
                        <Repost width= {"17px"} height= {"17px"} />
                        
                        <p className="ml-[5px]">
                            {repost}
                        </p>
                    </div>

                    <div className="flex items-center ml-[10px]">
                        
                        <Comment width= {"13px"} height= {"13px"} />
                        
                        <p className="ml-[5px]">
                            {comments}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}