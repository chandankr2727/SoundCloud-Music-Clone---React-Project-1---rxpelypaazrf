import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MoreButtonLogo from "../../Logos_and_icons/moreBottonLogo";
import { MusicContext } from "../../../Contexts/musicContext";
import { UserContext } from "../../../Contexts/authenticationContext";
import { openTheModal } from "../../../Utils/localStorageFunctions";
import MoreOptionModalForSongCard from "../../../Portal/Destop/More_option_portal/moreOptionModalForSongCard";
import { AudioContext } from "../../../Contexts/audioContext";





export default function ImageForAlbumCard({album}) {

    const {image, albumId, artist}= album;

        

    const [isHovered, setIsHovered]= useState(false);
    const [isLiked, setIsLiked]= useState(false);
    const [isFollowed, setIsFollowed]= useState(false);
    const [showModal, setShowModal]= useState(false);



    // const audioPlayer= useRef(null);

    // const togglePlayPause= () => {
    //     const prevVal= isPlaying;

    //     setIsPlaying((old) => !old);

    //     if(!prevVal) {
    //         audioPlayer.current.play();
    //     } else {
    //         audioPlayer.current.pause();
    //     }
    // }

    return (
        <>
            <Link to={`/sets/${artist?.[0]?.name}/${albumId}`}>
                <div className={`w-[7rem] h-[7rem]'}
                    min-[1238px]:w-[10rem] min-[1238px]:h-[10rem]
                    bg-gradient-to-r from-[#846170] to-[#70929c] hover:opacity-50`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseOut={() => setIsHovered(false)}>
                    <img className="rounded-[3px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] w-full h-full" 
                        src={image}>
                    </img>
                </div>
            </Link>

        {/* play/pause button */}
            {/* <button className={`bg-[#f50] absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                            w-[50px] h-[50px] rounded-full 
                            pl-[1px] mb-[3px] flex items-center justify-center 
                            hover:bg-[#d74800]
                            ${(isHovered || showModal) ? 'opacity-100' : 'opacity-0'}`}
                    
                    onMouseEnter={() => setIsHovered(true)}>
                {
                    
                    !isPlaying ? 
                        <div>
                            <PlayButton_Big width={"35px"} height={"39px"}/>
                        </div>
                        :
                        <div>
                            <PauseButton width={"35px"} height={"39px"} color={"#ffffff"}/>
                        </div>
                }   
            </button> */}
            
            
        {/* like and follow section */}
            <div className={`absolute bottom-[28px] flex items-center justify-end w-full mb-[4px]
                    py-[5px] pr-[10px] shadow-[inset_0px_14px_22px_7px_rgb(0,0,0)]
                    ${(isHovered || showModal) ? 'opacity-100' : 'opacity-0'}`}
                    onMouseEnter={() => setIsHovered(true)}>
                {/* <div className='mr-[12px] cursor-pointer'>
                    {
                        isLiked ? <Filled_heart color={"#f50"} />
                        :
                        <Empty_heart color= {"white"} width={"14px"} height={"16px"} />
                    }
                </div>
                
                <div className='mr-[10px] cursor-pointer' 
                    onClick={() => add_RemoveFromFavourites(artist?.[0]?.singerId, setIsFollowed, setFavArtists, favArtists, "favArtists")}>
                    {
                        isFollowed ? <UserChecked color={"#f50"} width={"14px"} height={"16px"} />
                        :
                        <Filled_follow color= {"white"} width={"14px"} height={"16px"}/>
                    }
                   
                </div> */}

                <div className='relative cursor-pointer' 
                    onClick={(e) => openTheModal(e, setShowModal)}>

                    <MoreButtonLogo color= {"white"} width={"20px"} height={"20px"} />
                    
                    {
                    showModal && <MoreOptionModalForSongCard />
                }
                </div>

            </div>
        </>
    )
}