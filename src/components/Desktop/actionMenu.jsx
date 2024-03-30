import { useContext } from "react";
import Copy_link from "../Logos_and_icons/copyLink";
import Filled_heart from "../Logos_and_icons/filledHeart";
import MoreButtonLogo from "../Logos_and_icons/moreBottonLogo";
import Repost from "../Logos_and_icons/repost";
import Share from "../Logos_and_icons/share";
import { MusicContext } from "../../Contexts/musicContext";
import { useState } from "react";
import { useEffect } from "react";





export default function ActionMenu({songId}) {

    const {favourites}= useContext(MusicContext);

    const [isLiked, setIsLiked]= useState(false);

    const arr= [{'name': isLiked ? "Liked" : 'Like', 'component': <Filled_heart width={"14px"} height={"19px"} 
                    color={isLiked ? "#f50" : "#111"} />}, 
                {'name': 'Repost', 'component': <Repost width={"16px"} height={"20px"} color={"#111"} />}, 
                {'name': 'Share', 'component': <Share width={"14px"} height={"20px"} color={"#111"} />}, 
                {'name': 'Copy Link', 'component': <Copy_link width={"15px"} height={"20px"} color={"#111"} />},
                ];

    useEffect(() => {

        const isPresentInFavourites= favourites.find((item) => item.songId === songId);
        if(isPresentInFavourites) {
            setIsLiked(true);
        } else {
            setIsLiked(false);
        }

    }, [favourites])
    return (
        <>
            {
                arr.map((item) => {
                    return(
                        <button key={item.name} className="w-max text-[12px] px-[8px] py-[2px] border-[1px] border-[#ccc]
                            mr-[10px] flex flex-row flex-nowrap text-[#111] rounded-[3px]">
                            <div>{item.component}</div>
                            <div className="pl-[5px]">{item.name}</div>
                        </button>
                    )
                })
            }
            <button key={"More"} className="text-[12px] px-[8px] py-[2px] border-[1px] border-[#ccc]
                mr-[10px] flex flex-row text-[#111] rounded-[3px]">
                <div><MoreButtonLogo width={"20px"} height={"19px"} color={"#111"}/></div>
                <div className="pl-[5px]">More</div>
            </button>
        </>
       
    )
}