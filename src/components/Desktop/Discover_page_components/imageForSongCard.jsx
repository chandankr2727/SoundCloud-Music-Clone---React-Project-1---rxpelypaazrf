import { useContext, useEffect, useRef, useState } from "react";
import PlayButton_Big from "../../Logos_and_icons/playButton_big";
import PauseButton from "../../Logos_and_icons/pauseButton";
import { Link } from "react-router-dom";
import Empty_heart from "../../Logos_and_icons/emptyHeart";
import Filled_follow from "../../Logos_and_icons/filledFollow";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";
import { MusicContext } from "../../../Contexts/musicContext";
import { UserContext } from "../../../Contexts/authenticationContext";
import {add_RemoveFromFavourites, openTheModal } from "../../../Utils/localStorageFunctions";
import Filled_heart from "../../Logos_and_icons/filledHeart";
import UserChecked from "../../Logos_and_icons/userChecked";
import MoreOptionModalForSongCard from "../../../Portal/Destop/More_option_portal/moreOptionModalForSongCard";
import { handleFavourites } from "../../../Utils/fetchFunctions";
import { AudioContext } from "../../../Contexts/audioContext";





export default function ImageForSongCard({album}) {

    const {image, songId, audio, artist}= album;
    const {projectId, favourites, setFavourites, favArtists, setFavArtists}= useContext(MusicContext);

    const { playPause, nextSong, currentSongs, setCurrentSongs, handleActiveSong, isPlaying}= useContext(AudioContext);
    const {token, isAuthenticated}= useContext(UserContext);
    
    const [showModal, setShowModal]= useState(false);
    const [isHovered, setIsHovered]= useState(false);
    const [isLiked, setIsLiked]= useState(false);
    const [isFollowed, setIsFollowed]= useState(false);

    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [isLoaded, setIsLoaded]= useState(false);

    


    const handleNextSong = () => {
        playPause(false);
        nextSong(Math.floor(Math.random() * currentSongs.length));
    };

    
    useEffect(() => {
        const isPresentInFavourites= favourites.find((item) => item.songId === songId);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }

        const isPresentInFavArtists= favArtists.find(id => id === artist?.[0]?.singerId);
        if(isPresentInFavArtists) {
            setIsFollowed(true);
        } else {
            setIsFollowed(false);
        }
    }, [favourites, favArtists])
    
    

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
        <>
            <Link to={`/song/${songId}`}>
                <div className={`w-[7rem] h-[7rem]'}
                    min-[1238px]:w-[10rem] min-[1238px]:h-[10rem]
                    bg-gradient-to-r from-[#846170] to-[#70929c]`}
                    onMouseOver={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}>
                    <img className="rounded-[3px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] w-full h-full" 
                        src={image}>
                    </img>


                     {/* like and follow section */}
                    <div className={`absolute bottom-[45px] flex items-center justify-end w-full mb-[4px]
                            py-[5px] pr-[10px] shadow-[inset_0px_14px_22px_7px_rgb(0,0,0)]
                            ${(isHovered || showModal) ? 'opacity-100' : 'opacity-0'}`}
                            onMouseOver={() => setIsHovered(true)}
                            onMouseOut={() => setIsHovered(false)}>
                        <div className='mr-[12px] cursor-pointer' onClick={(e) => {e.preventDefault(); e.stopPropagation();
                                handleFavourites(album, favourites, setFavourites, token, projectId, setIsLiked)}}>
                            {
                                isLiked ? <Filled_heart color={"#f50"} width={"15px"} height={"16px"} />
                                :
                                <Empty_heart color= {"white"} width={"14px"} height={"16px"} />
                            }
                        </div>
                        
                        {   isAuthenticated && 
                            <div className='mr-[10px] cursor-pointer' 
                                onClick={(e) => {e.preventDefault(); e.stopPropagation(); add_RemoveFromFavourites(artist?.[0]?.singerId, setIsFollowed, setFavArtists, favArtists, "favArtists")}}>
                                { 
                                    isFollowed ? <UserChecked color={"#f50"} width={"14px"} height={"16px"} />
                                    :
                                    <Filled_follow color= {"white"} width={"14px"} height={"16px"}/>
                                }
                            
                            </div>
                        }

                        <div className='relative cursor-pointer' 
                            onClick={(e) => {e.preventDefault(); e.stopPropagation(); openTheModal(e, setShowModal)}}>

                            <MoreButtonLogo color= {"white"} width={"20px"} height={"20px"} />
                            
                            {
                            showModal && <MoreOptionModalForSongCard />
                        }
                        </div>
                    </div>
                    
                </div>
            </Link>

        {/* play/pause button */}
            <button className={`bg-[#f50] absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                            w-[50px] h-[50px] rounded-full 
                            pl-[1px] mb-[3px] flex items-center justify-center 
                            hover:bg-[#d74800]
                            ${(isHovered || showModal) ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => playPause(isPlaying ? false : true)}
                        onMouseOver={() => setIsHovered(true)}
                        onMouseOut={() => setIsHovered(false)}>
                
                <div onClick={() => handleActiveSong(album)}>
                    {   isLoaded ?
                        (
                            !isPlaying ? <PlayButton_Big width={"35px"} height={"39px"}/>
                            :
                            <PauseButton width={"35px"} height={"39px"} color={"#ffffff"}/>
                        ) :

                        <MoreButtonLogo width={"35px"} height={"39px"} color={"#ffffff"} />
                    }
                    
                </div>

                <audio
                    src={audio}
                    ref={audioPlayer}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                />
                 
            </button>
        </>
    )
}