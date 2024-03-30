
import { useContext, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { AudioContext } from "../../../Contexts/audioContext";
import { MusicContext } from "../../../Contexts/musicContext";
import Filled_heart from "../../../components/Logos_and_icons/filledHeart";
import Empty_heart from "../../../components/Logos_and_icons/emptyHeart";
import PlayButton_Big from "../../../components/Logos_and_icons/playButton_big";
import PauseButton from "../../../components/Logos_and_icons/pauseButton";
import { UserContext } from "../../../Contexts/authenticationContext";
import { handleFavourites } from "../../../Utils/fetchFunctions";

function NavbarForMobile() {

    const {isActive, activeSong, isPlaying, setIsPlaying}= useContext(AudioContext);

    const {favourites, setFavourites, projectId }= useContext(MusicContext);

    const {token}= useContext(UserContext);


    const [isLiked, setIsLiked]= useState(false);

    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const {artist, image, songId, title}= activeSong;

    const audioPlayer = useRef(null);


    useEffect(() => {
        const isPresentInFavourites= favourites.find((item) => item.songId === songId);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }
    }, [favourites, activeSong])

    useEffect(() => {
        if(seekTime) {
            audioPlayer.current.currentTime = seekTime;
        }
      }, [seekTime]);
      
    
    useEffect(() => {
        if (audioPlayer.current) {
        if (isPlaying) {
            const playPromise = audioPlayer.current.play();
            if (playPromise !== undefined) {
            playPromise.then(() => {}).catch((error) => {
                console.error('Autoplay prevented:', error);
            });
            }
        } else {
            audioPlayer.current.pause();
        }
        }
    }, [isPlaying]);

    return (
        <div className="fixed bottom-0 left-0 w-full text-[#999] z-[100]">
            {
                isActive && <div className="bg-[#303030] flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-[60px] h-[60px]">
                            <img src={image} alt={title} />
                        </div>
                        <div className="text-[14px] font-semibold ml-[10px]">
                            <p className="text-white">{title}</p>
                            <p className="text-[#999] text-[13px]">{artist?.[0]?.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center p-[7px]">
                        <div className="p-[8px]" onClick={() => 
                                handleFavourites(activeSong, favourites, setFavourites, token, projectId, setIsLiked)}>
                                {/* {console.log("song id: ", activeSong)} */}

                            {
                                isLiked ? <Filled_heart width={"20px"} height={"20px"} color={"#ffffff"} />
                                :
                                <Empty_heart width={"20px"} height={"20px"} color={"#ffffff"} />
                            }
                        </div>

                        <div className="p-[8px]" onClick={() => setIsPlaying(isPlaying ? false : true)}>
                            {
                                !isPlaying ? <PlayButton_Big width={"30px"} height={"30px"} color={"#ffffff"} />
                                :
                                <PauseButton width={"30px"} height={"30px"} color={"#ffffff"} />
                            }
                        </div>

                        <audio
                            src={activeSong?.audio}
                            ref={audioPlayer}
                            onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                            onLoadedData={(event) => setDuration(event.target.duration)}
                        />
                    </div>
                </div>
            }
            <nav className="bg-black">
                <ul className="flex flex-row items-stretch justify-stretch pr-[20px] pl-[12px] py-[10px]">
                    <li className="flex items-stretch justify-stretch flex-1">
                        <NavLink to={'/discover'} className="flex flex-col items-center justify-center flex-1">
                            <svg className="w-[2rem] h-[2rem]">
                                <path fill="currentColor" d="M12.468 2.414a.75.75 0 0 0-.936 0l-8.5 6.789a.75.75 0 0 0-.282.586V21c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75v-4.5a1.75 1.75 0 1 1 3.5 0V21c0 .414.336.75.75.75h6a.75.75 0 0 0 .75-.75V9.789a.75.75 0 0 0-.282-.586l-8.5-6.789Z"></path>
                            </svg>
                            <p className="text-[10px] ml-[-6px]">
                                Home
                            </p>
                        </NavLink>
                    </li>

                    <li className="flex items-stretch justify-stretch flex-1">
                        <NavLink to={'/feed'} className="flex flex-col items-center justify-center flex-1">
                            <svg className="w-[2rem] h-[2rem]">
                                <path fill="currentColor" d="M15.75 3.25h-7.5v1.5h7.5v-1.5ZM6.25 6.25h11.5v1.5H6.25v-1.5ZM4.25 10A.75.75 0 0 1 5 9.25h14a.75.75 0 0 1 .75.75v10a.75.75 0 0 1-.75.75H5a.75.75 0 0 1-.75-.75V10Zm1.5.75v8.5h12.5v-8.5H5.75Z"></path>
                            </svg>
                            <p className="text-[10px] ml-[-8px]">
                                Feed
                            </p>
                        </NavLink>
                    </li>

                    <li className="flex items-stretch justify-stretch flex-1">
                        <NavLink to={'/search'} className="flex flex-col items-center justify-center flex-1">
                            <svg className="w-[2rem] h-[2rem]">
                                <path d="M13 3.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75a9.706 9.706 0 0 0 4.671-1.19l6.977 6.977a2.75 2.75 0 0 0 3.89-3.889l-6.978-6.977A9.706 9.706 0 0 0 22.75 13c0-5.385-4.365-9.75-9.75-9.75ZM4.75 13a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Zm15.972 5.954 6.755 6.755a1.25 1.25 0 1 1-1.768 1.768l-6.755-6.755a9.812 9.812 0 0 0 1.768-1.768Z" fill="currentColor"></path>
                            </svg>
                            <p className="text-[10px]">
                                Search
                            </p>
                        </NavLink>
                    </li>

                    <li className="flex items-stretch justify-stretch flex-1">
                        <NavLink to={'/you'} className="flex flex-col items-center justify-center flex-1">
                            <svg className="w-[2rem] h-[2rem]">
                                <path fill="currentColor" d="M3.25 4A.75.75 0 0 1 4 3.25h3a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75H4a.75.75 0 0 1-.75-.75V4Zm1.5.75v14.5h1.5V4.75h-1.5ZM9.75 4a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75v16a.75.75 0 0 1-.75.75h-3a.75.75 0 0 1-.75-.75V4Zm1.5.75v14.5h1.5V4.75h-1.5ZM15.563 6.834a.75.75 0 0 0-.53.919l3.364 12.557a.75.75 0 0 0 .919.53l2.898-.776a.75.75 0 0 0 .53-.919L19.379 6.588a.75.75 0 0 0-.918-.53l-2.898.776Zm4.09 12.363L16.675 8.09l1.449-.388L21.1 18.809l-1.449.388Z"></path>-
                            </svg>
                            <p className="text-[10px] ml-[-5px]">
                                Library
                            </p>
                        </NavLink>
                    </li>

                    <li className="flex items-stretch justify-stretch flex-1">
                        <NavLink to={'/download'} className="flex flex-col items-center justify-center flex-1">
                            <svg className="w-[2rem] h-[2rem]">
                                <path d="m16 23.06-5.53-5.53 1.06-1.06 3.72 3.72V9h1.5v11.19l3.72-3.72 1.06 1.06L16 23.06Z" fill="currentColor"></path>
                                <path d="M16 29c7.18 0 13-5.82 13-13S23.18 3 16 3 3 8.82 3 16s5.82 13 13 13Zm0-1.5C9.649 27.5 4.5 22.351 4.5 16S9.649 4.5 16 4.5 27.5 9.649 27.5 16 22.351 27.5 16 27.5Z" fill="currentColor"></path>
                            </svg>
                            <p className="text-[10px]">
                                Download
                            </p>
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </div>
        
    )
}

export default NavbarForMobile;