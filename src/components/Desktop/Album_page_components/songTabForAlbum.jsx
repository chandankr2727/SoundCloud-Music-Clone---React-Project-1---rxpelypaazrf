import { useContext, useRef, useState } from "react";
import PlayButton_Big from "../../Logos_and_icons/playButton_big";
import Play_button_small from "../../Logos_and_icons/playButton_small";
import { MusicContext } from "../../../Contexts/musicContext";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";
import { AudioContext } from "../../../Contexts/audioContext";
import PauseButton from "../../Logos_and_icons/pauseButton";






export default function SongTabForAlbum({song, num}) {

    const {myRandom, favourites, setFavourites, token, projectId}= useContext(MusicContext);

    const {isPlaying, playPause, currentSongs, setCurrentSongs, nextSong,
        handleActiveSong, activeSong}= useContext(AudioContext);

    const {artist, audio, image, release, songId, title}= song;

    const [played, setPlayed]= useState(myRandom(200) + "k");
    const [isLiked, setIsLiked]= useState(false);
    const [isHovered, setIsHovered]= useState(false);

    const [isLoaded, setIsLoaded]= useState(false);

    const [duration, setDuration] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [clickedFirstTime, setClickedFirstTime]= useState(false);


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

    

    // useEffect(() => {
    //     const isPresentInFavourites= favourites.find((item) => item.songId === songId);
    //     console.log("favourites: ", songId);
    //     if(isPresentInFavourites) {
    //         setIsLiked(true);
    //     } else {
    //         setIsLiked(false);
    //     }
    // }, [favourites])

    return (
        <li className="flex justify-between items-center py-[10px]
            border-b border-[#f2f2f2] hover:bg-[#f2f2f2] px-[15px] rounded-[5px]"
            onMouseOver={() => setIsHovered((old) => !old)}
            onMouseOut={() => setIsHovered((old) => !old)}>
            <div className=" flex items-center">
                <div className="w-[30px] h-[30px] flex items-center justify-center">
                    <img src={image} alt={title} className=" w-full h-full"/>

                    {
                        isHovered && 
                        <button className="absolute bg-[#f50] rounded-full pl-[2px]"
                            onClick={(e) => {e.preventDefault(); e.stopPropagation(); playPause(isPlaying ? false : true);
                                handleActiveSong(song); setClickedFirstTime(!clickedFirstTime);
                                }}>
                            {
                                isLoaded ?
                                (
                                    (isPlaying && songId === activeSong.songId && clickedFirstTime) ? 
                                    <PauseButton width={"17px"} height={"17px"} color={"#ffffff"}  />
                                    :   
                                    <PlayButton_Big width={"17px"} height={"17px"} />
                                )
                                :
                                <MoreButtonLogo width={"20px"} height={"20px"} color={"#ffffff"} />  
                            }
                        </button>
                    }
                    
                </div>
                <audio id="audioPlayer"
                    src={song?.audio}
                    ref={audioPlayer}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                />


                <div className="flex items-center text-[#999] text-[14px] pl-[1rem]">
                    <p>{num}</p>
                    <p className="text-black pl-[1rem]">{title}</p>
                </div>
            </div>
            {
                // isHovered ?
                // <div className="flex items-center">
                //     <div className="flex items-center">
                //         <div className="p-[5px] bg-white border border-[#f2f2f2] ml-[7px] cursor-pointer"
                //         onClick={(e)=> {e.stopPropagation(); 
                //             handleFavourites(song, favourites, setFavourites, token, projectId, setIsLiked)}}>
                //                 {
                //                     isLiked ? <Filled_heart width={"16px"} height={"16px"} color={"#f50"} />
                //                     :
                //                     <Filled_heart width={"16px"} height={"16px"} color={"#000000"} />
                //                 }
                            
                //         </div>
                //         <div className="p-[5px] bg-white border border-[#f2f2f2] ml-[7px] cursor-pointer">
                //             <Repost width={"16px"} height={"16px"} color={"#000000"} />
                //         </div>
                //         <div className="p-[5px] bg-white border border-[#f2f2f2] ml-[7px] cursor-pointer">
                //             <Share width={"16px"} height={"16px"} color={"#000000"} />
                //         </div>
                //         <div className="p-[5px] bg-white border border-[#f2f2f2] ml-[7px] cursor-pointer">
                //             <Copy_link width={"16px"} height={"16px"} color={"#000000"} />
                //         </div>
                //         <div className="p-[5px] bg-white border border-[#f2f2f2] ml-[7px] cursor-pointer">
                //             <MoreButtonLogo width={"16px"} height={"16px"} color={"#000000"} />
                //         </div>
                //     </div>
                // </div>
                // :
                <div className="flex items-center text-[#999] text-[12px]">
                    <Play_button_small width={"16px"} height={"16px"} />
                    <p>{played}</p>
                </div>
            }
            
        </li>
    )
}