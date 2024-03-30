import { useContext, useRef } from "react";
import { MusicContext } from "../../Contexts/musicContext";
import Empty_heart from "../Logos_and_icons/emptyHeart";
import Comment from "../Logos_and_icons/comment";
import Repost from "../Logos_and_icons/repost";
import Play_button_small from "../Logos_and_icons/playButton_small";
import FollowButtonForMobile from "./followButtonForMobile";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchSingleSong from "../../Custom_hooks/useFetchSingleSong";
import { useEffect } from "react";
import Filled_heart from "../Logos_and_icons/filledHeart";
import { fetch_data, handleFavourites } from "../../Utils/fetchFunctions";
import { UserContext } from "../../Contexts/authenticationContext";
import FooterForMobile from "../../Pages/Mobile/Home_page/footerForMobile";
import { mapSingleSongData } from "../../Utils/mapFunctions";
import SongTabForMobile from "./songTabForMobile";
import { AudioContext } from "../../Contexts/audioContext";
import PlayButton_Big from "../Logos_and_icons/playButton_big";
import PauseButton from "../Logos_and_icons/pauseButton";
import MoreButtonLogo from "../Logos_and_icons/moreBottonLogo";



function SongPageForMobile() {
    const {myRandom, years, urlObject, favourites, setFavourites, favArtists, projectId }= useContext(MusicContext);
    
    const {token}= useContext(UserContext);

    const {isPlaying, setIsPlaying, handleActiveSong, playPause, nextSong, currentSongs}= useContext(AudioContext);


    const {songId}= useParams();
    
    const [relatedSongs, setRelatedSongs]= useState([]); 
    const [isLoading, setIsLoading]= useState(true);

    const [song, loader1, error1]= useFetchSingleSong(urlObject.singleSongUrl + songId);

    const [played, setPlayed]= useState(myRandom(50));
    const [hours, setHours]= useState(myRandom(12));
    const [minutes, setMinutes]= useState(myRandom(59));
    const [year, setYear]= useState(0)
    const [month, setMonth]= useState(0);
    const [date, setDate]= useState(0);

    const [Liked, setLiked]= useState(myRandom(100) + "k");
    const [comment, setComment]= useState(myRandom(20));
    const [repost, setRepost]= useState(myRandom(15));

    const [isLiked, setIsLiked]= useState(false);
    const [isFollowing, setIsFollowing]= useState(false);

    const [isLoaded, setIsLoaded]= useState(false);

    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);


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
            setIsLoading(true);
    
            if(song) {
                try {
                    let arr= [];
    
                    song?.artist?.[0]?.songs.forEach((item) => {
                        fetch_data(urlObject.singleSongUrl + item, projectId)
                        .then(data => {
                            const modifiedData= mapSingleSongData(data);
                            arr= [...arr, modifiedData];
                            setRelatedSongs(arr); 
                        })
                        
                    })
                } catch(error) {
                    console.log("error in rendering related songs: ", error);
                } finally {
                     
                    setIsLoading(false);
                }
            }
            
        }, [song])

    useEffect(() => {
        setYear(song?.release?.slice(0, 4));
        setMonth(song?.release?.slice(5,7));
        setDate(song?.release?.slice(8,10));
    }, [song])


    useEffect(() => {

        const isPresentInFavourites= favourites.find((item) => item.songId === songId);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }

        const isPresentInFavArtists= favArtists.find(id => id === artist?.[0]?.singerId);
        if(isPresentInFavArtists) {
            setIsFollowing(true);
        } else {
            setIsFollowing(false);
        }
    }, [favArtists, favourites])

    const {artist, audio, image, title, release}= song;
    return (
        <>
            <div className="h-[100vw] bg-contain bg-gradient-to-r from-[#70929c] to-[#846170]">
                <img className="h-full" 
                    src={image} />
            </div>
            

            <div className="bg-black p-[1rem]">
                <div className="flex text-white justify-between font-semibold">
                    <div className="text-[22px]">
                        <div>
                            {title}
                        </div>
                        <div className="text-[#999]">
                            {artist?.[0]?.name}
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-white rounded-full w-[50px] h-[50px] pl-[3px]
                        min-[375px]:w-[65px] min-[375px]:h-[65px]"
                            onClick={() => {setIsPlaying(isPlaying ? false : true);
                                handleActiveSong(song);
                                }
                            }>
                            {   isLoaded ?
                                (
                                    !isPlaying ? <PlayButton_Big width={"35px"} height={"39px"} color={"#000000"}/>
                                    :
                                    <PauseButton width={"35px"} height={"39px"} color={"#000000"}/>
                                ) :

                                <MoreButtonLogo width={"35px"} height={"39px"} color={"#000000"} />
                            }

                            <audio id="audioPlayer"
                                src={song?.audio}
                                ref={audioPlayer}
                                onEnded={handleNextSong}
                                onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
                                onLoadedData={(event) => {setDuration(event.target.duration); setIsLoaded(true)}}
                            />
                    </div>
                </div>


                {/* meta-section of a song */}

                <div className="flex items-center text-[#999] text-[14px] ml-[-3px] mt-[5px]">
                    <div className="flex items-center">
                        <Play_button_small width={'19px'} height= {'19px'} />

                        <p className="ml-[1px]">
                            {played}k
                        </p>
                    </div>

                    <div className="mt-[-9px] text-[15px] mx-[5px]">.</div>
                    
                    <div>
                        {hours}:{minutes}
                    </div>

                    { release && <div className="mt-[-9px] text-[15px] mx-[5px]">.</div> }

                    {
                        release && <div>
                            {years[+month]} {date}, {year}
                        </div>
                    }
                </div>

                <div className="flex items-center text-[#999] text-[13px] mt-[1rem]">
                    <div className="flex items-center mr-[1rem]" 
                        onClick={() => handleFavourites(song, favourites, setFavourites, token, projectId, setIsLiked)}>

                        {
                            isLiked ? <Filled_heart width= {"20px"} height= {"20px"} color={'#999'} />
                            : 
                            <Empty_heart width= {"20px"} height= {"20px"}/>
                        }
                        <p className="ml-[5px]">
                            {Liked}
                        </p>
                    </div>

                    <div className="flex items-center mr-[1rem]">
                        <Comment width= {"23px"} height= {"23px"}/>
                        <p className="ml-[5px]">
                            {comment}
                        </p>
                    </div>

                    <div className="flex items-center mr-[1rem]">
                        <Repost width= {"25px"} height= {"25px"}/>
                        <p className="ml-[5px]">
                            {repost}
                        </p>
                    </div>
                </div>

                {/* artist section */}

                <div className="flex flex-nowrap justify-between my-[1rem] items-center text-white">
                    <FollowButtonForMobile name={artist?.[0]?.name} image={artist?.[0]?.singerImage}
                        artist= {artist?.[0]?.singerId}/>
                </div>

                {/* related tracks */}

                <div className="">
                    <div className="flex justify-between py-[10px] text-[#999] border-b border-[#ccc]">
                        <p className="">Related Tracks</p>
                        <button className="hover:text-white">See all</button>
                    </div>
                    <div className="max-h-[450px] overflow-y-scroll">
                        {
                            relatedSongs.map((song, index) => {
                                return (
                                    <SongTabForMobile song={song} index={index}/>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            <FooterForMobile />
        </>
            
    )
}

export default SongPageForMobile;