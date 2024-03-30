import { useContext, useEffect, useRef } from "react"
import Filled_heart from "../../Logos_and_icons/filledHeart"
import Filled_follow from "../../Logos_and_icons/filledFollow"
import Next_in_queue from "../../Logos_and_icons/nextInQueue"
import { useState } from "react"
import PlayListModal from "../../../Portal/Destop/Playlist_portal/playlistModal"
import { UserContext } from "../../../Contexts/authenticationContext"
import { add_RemoveFromFavourites, closeTheModal, openTheModal } from "../../../Utils/localStorageFunctions"
import { AudioContext } from "../../../Contexts/audioContext"
import Controls from "./controls"
import SeekBar from "./seekBar";
import VolumeBar from "./volumeBar"
import Player from "./player"
import { MusicContext } from "../../../Contexts/musicContext"
import UserChecked from "../../Logos_and_icons/userChecked"
import { handleFavourites } from "../../../Utils/fetchFunctions"
import { Link } from "react-router-dom"




const AudioPlayerForDektop= () => {

    const {isAuthenticated, token}= useContext(UserContext);

    const {favourites, setFavArtists, favArtists, setFavourites, projectId}= useContext(MusicContext);

    const { activeSong, currentSongs, currIndex, isActive, isPlaying, setIsPlaying, playPause, handleActiveSong,
        nextSong, prevSong, duration, setDuration, seekTime, setSeekTime, appTime, setAppTime, volume, setVolume,
        repeat, setRepeat, shuffle, setShuffle }= useContext(AudioContext);

    const [isFollowed, setIsFollowed]= useState(false);
    const [isLiked, setIsLiked]= useState(false);

    const [isLoaded, setIsLoaded]= useState(false);

    const [artistName, setArtistName]= useState(activeSong?.artist?.[0]?.name);

    

    

    const [showPlaylistModal, setShowPlaylistModal]= useState(false);
    
    useEffect(() => {
        if (currentSongs.length) playPause(true);
    }, [currIndex]);

    useEffect(() => {
        if(artistName?.length > 15) {
            const name= artistName.slice(0, 15) + "...";
            setArtistName(name);
        }
    }, [activeSong])

    const handleNextSong = () => {
        playPause(false);

        if (!shuffle) {
            nextSong((currIndex + 1) % currentSongs.length);
        } else {
            nextSong(Math.floor(Math.random() * currentSongs.length));
        }
    };

    const handlePrevSong = () => {
        if (currIndex === 0) {
            prevSong(currentSongs.length - 1);
        } else if (shuffle) {
            prevSong(Math.floor(Math.random() * currentSongs.length));
        } else {
            prevSong(currIndex - 1);
        }
    };
    

    useEffect(() => {
        const isPresentInFavourites= favourites.find((item) => item.songId === currentSongs?.songId);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }

        const isPresentInFavArtists= favArtists.find(id => id === currentSongs?.artist?.[0]?.singerId);
        if(isPresentInFavArtists) {
            setIsFollowed(true);
        } else {
            setIsFollowed(false);
        }
    }, [favourites, favArtists])
    

 
    
    return (
        <div id="audioplayer" className="fixed w-full bottom-0 flex bg-[#f2f2f2] border-t border-[#999] justify-center z-50" >
            <div className="flex flex-nowrap justify-center items-center">
                <Controls
                    isPlaying={isPlaying}
                    setRepeat={setRepeat}
                    setShuffle={setShuffle}
                    setIsPlaying={setIsPlaying}
                    handlePrevSong={handlePrevSong}
                    handleNextSong={handleNextSong}
                    song= {activeSong}
                />
                
                <SeekBar
                    value={appTime}
                    min="0"
                    max={duration}
                    onInput={(event) => setSeekTime(event.target.value)}
                    setSeekTime={setSeekTime}
                    appTime={appTime}
                />

                <Player
                    activeSong={activeSong}
                    volume={volume}
                    isPlaying={isPlaying}
                    seekTime={seekTime}
                    repeat={repeat}
                    currIndex={currIndex}
                    onEnded={handleNextSong}
                    onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                    onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true);}}
                />

               
                <VolumeBar
                    value={volume}
                    min="0"
                    max="1"
                    onChange={(event) => setVolume(event.target.value)}
                    setVolume={setVolume}
                />
               

                <div className="flex flex-nowrap py-[10px] items-center ml-[1rem]">
                    <div className="flex flex-nowrap items-center">
                        <Link to={`/song/${activeSong?.songId}`}>
                            <div className="w-[30px] h-[30px]">
                                <img src={activeSong?.image} />
                            </div>
                        </Link>
                        
                        <div className="ml-[0.5rem]">
                            <p className="text-[13px] text-[#999] leading-[1.25]">
                                {artistName}
                            </p>
                            <Link to={`/song/${activeSong?.songId}`}>
                                <p className="text-[15px] text-[#666] hover:text-[#f50]">{activeSong?.title}</p>
                            </Link>
                            
                        </div>
                    </div>

                    <div className="relative flex flex-nowrap items-center ml-[5rem] ">
                        {isAuthenticated && <div className="cursor-pointer" onClick={() => 
                                handleFavourites(activeSong, favourites, setFavourites, token, projectId, setIsLiked)}>
                                {/* {console.log('is liked: ', isLiked)} */}
                                <Filled_heart color={isLiked ? "#f50" : "#000000"} margin={"0.5rem"}/>
                            </div>}
                        
                        {
                            isAuthenticated && <div className="cursor-pointer" 
                            onClick={() => add_RemoveFromFavourites(activeSong?.artist?.[0]?.singerId, setIsFollowed, setFavArtists, favArtists, "favArtists")}>
                            {
                                isFollowed ? <UserChecked color={"#f50"} /> : 
                                <Filled_follow color={"#000000"} margin={"0.5rem"} />
                            }
                            </div>
                        }                       
                        <div className="relative cursor-pointer" onClick={(e) => {openTheModal(e, setShowPlaylistModal)}}>
                            <Next_in_queue margin={"0.5rem"} color= {showPlaylistModal ? "#f50" : "#000000"} />
                        </div>

                        {
                        showPlaylistModal && (
                            <PlayListModal onClose={(e) => {closeTheModal(e, setShowPlaylistModal)}} />
                        )
                    }
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AudioPlayerForDektop;