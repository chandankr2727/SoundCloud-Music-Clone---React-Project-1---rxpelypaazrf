import { useContext, useEffect, useState } from "react";
import Filled_follow from "../Logos_and_icons/filledFollow";
import UserChecked from "../Logos_and_icons/userChecked";
import { MusicContext } from "../../Contexts/musicContext";
import { add_RemoveFromFavourites } from "../../Utils/localStorageFunctions";





export default function FollowButtonForDesktop({singerId}) {

    const {favArtists, setFavArtists}= useContext(MusicContext);

    const [isFollowing, setIsFollowing]= useState(false);

    useEffect(() => {
        const isPresentInFavArtists= favArtists.find(id => id === singerId);
        if(isPresentInFavArtists) {
            setIsFollowing(true);
        } else {
            setIsFollowing(false);
        }
    }, [favArtists])

    return (
        <div  onClick={() => add_RemoveFromFavourites(singerId, setIsFollowing, setFavArtists, favArtists, "favArtists")}>
            {
                !isFollowing ? 
                <button className="flex items-center bg-[#f50] text-white mt-[0.5rem] text-[12px] px-[8px] py-[3px]
                    rounded-[4px]">
                    <Filled_follow width={"14px"} height= {"16px"} color= {"white"}/>
                    <div className="ml-[7px]">
                        Follow
                    </div>
                </button>
                :
                <button className="flex items-center bg-[white] text-[#f50] mt-[0.5rem] text-[12px] px-[5px] py-[3px]
                    rounded-[4px] border border-[#f50]">
                    <UserChecked width={"14px"} height= {"16px"} color= {"#f50"}/>
                    <div className="ml-[7px]">
                        Following
                    </div>
                </button>
            }
        </div>
    )
}