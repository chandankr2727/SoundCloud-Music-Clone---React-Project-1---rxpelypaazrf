import { useContext } from "react";
import Filled_followers from "../Logos_and_icons/filledFollowers";
import { MusicContext } from "../../Contexts/musicContext";
import { useState } from "react";
import { useEffect } from "react";
import { add_RemoveFromFavourites } from "../../Utils/localStorageFunctions";
import UserChecked from "../Logos_and_icons/userChecked";



function FollowButtonForMobile(props) {
    const {name, image, artistId}= props;

    const {myRandom, favArtists, setFavArtists }= useContext(MusicContext);

    const [isFollowing, setIsFollowing]= useState(false);
    const [followers, setFollowers]= useState(myRandom(50) + "k");


    useEffect(() => {

        const isPresentInFavArtists= favArtists.find(id => id === artistId);
        if(isPresentInFavArtists) {
            setIsFollowing(true);
        } else {
            setIsFollowing(false);
        }

    }, [favArtists])

    return (
        <>
            <div className="flex flex-nowrap items-center">
                <div>
                    <img src={image} className="w-[5rem] rounded-full min-[376px]:w-[6rem]"></img>
                </div>
                
                <div className="pl-[1rem]">
                    <p className="text-[14px] font-semibold">{name}</p>
                    <div className="flex flex-nowrap text-[#999] items-center">
                        <Filled_followers width={'12px'} height={'12px'} /> 
                        <div className="pl-[4px] text-[13px]">
                            {followers} Followers
                        </div>
                    </div>
                </div>
            </div>
            

            {
                window.innerWidth > 375 ?
                    isFollowing ? 
                    <button className="px-[22px] py-[8px] font-semibold rounded-full 
                        bg-transparent text-white border border-white"
                        onClick={() => add_RemoveFromFavourites(artistId, setIsFollowing, setFavArtists, favArtists, "favArtists")}>Following</button>
                    :
                    <button className="px-[22px] py-[8px] font-semibold rounded-full 
                        bg-white text-black"
                        onClick={() => add_RemoveFromFavourites(artistId, setIsFollowing, setFavArtists, favArtists, "favArtists")}>Follow</button>
                : 
                
                isFollowing ?
                <button className="flex justify-center bg-[#99999952] py-[8px] rounded-full w-[40px] h-[40px]"
                    onClick={() => add_RemoveFromFavourites(artistId, setIsFollowing, setFavArtists, favArtists, "favArtists")}>

                    <svg className="w-[20px] ml-[3px] fill-white" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g className="fill-white" fillRule="evenodd" clipRule="evenodd">
                            <path d="M4.25 7C4.25 3.27208 7.27208 0.25 11 0.25C14.7279 0.25 17.75 3.27208 17.75 7C17.75 10.7279 14.7279 13.75 11 13.75C7.27208 13.75 4.25 10.7279 4.25 7ZM11 1.75C8.1005 1.75 5.75 4.10051 5.75 7C5.75 9.8995 8.1005 12.25 11 12.25C13.8995 12.25 16.25 9.8995 16.25 7C16.25 4.10051 13.8995 1.75 11 1.75Z"></path><path d="M22.25 13.75V17H23.75V13.75H27V12.25H23.75V9H22.25V12.25H19V13.75H22.25Z"></path><path d="M11 15.25C6.64119 15.25 3.85056 16.2797 2.20786 18.4309C0.606833 20.5274 0.25 23.5115 0.25 27V27.75H21.75V27C21.75 23.4974 21.3934 20.5126 19.7917 18.4192C18.1484 16.2715 15.3572 15.25 11 15.25ZM20.2437 26.25H1.75635C1.81071 23.1538 2.22469 20.8803 3.40001 19.3412C4.6266 17.735 6.83596 16.75 11 16.75C15.1657 16.75 17.3745 17.7285 18.6004 19.3308C19.7755 20.8666 20.1895 23.1401 20.2437 26.25Z">
                            </path>
                        </g>
                    </svg>
                </button>
                :
                <button className="flex justify-center bg-[#99999952] py-[8px] pl-[3px] rounded-full w-[40px] h-[40px]"
                    onClick={() => add_RemoveFromFavourites(artistId, setIsFollowing, setFavArtists, favArtists, "favArtists")}>

                    
                    <UserChecked width={"23px"} height={"23px"} color={"#38d"}/>
                </button>
        
            }
        </>
    )
}

export default FollowButtonForMobile;