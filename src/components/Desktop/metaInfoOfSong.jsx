import { useContext, useState } from "react";
import { MusicContext } from "../../Contexts/musicContext";
import Play_button_small from "../Logos_and_icons/playButton_small";
import Filled_heart from "../Logos_and_icons/filledHeart";
import Repost from "../Logos_and_icons/repost";
import Comment from "../Logos_and_icons/comment";




export default function MetaInfoOfSong() {

    const {myRandom}= useContext(MusicContext);

    const [played, setPlayed]= useState(myRandom(500));
    const [liked, setLiked]= useState(myRandom(80));
    const [repost, setRepost]= useState(myRandom(100));
    const [comment, setComment]= useState(myRandom(10));

    return (
        <div className="flex items-center ml-[-3px] text-[#999] mt-[4px]">
            <div className="flex items-center">
                
                <Play_button_small width= {"15px"} height= {"15px"}/> 
                
                <p className="">
                    {played}k
                </p>
            </div>

            <div className="flex items-center ml-[8px]">
                
                <Filled_heart width= {"12px"} height= {"12px"} />
                
                <p className="ml-[5px]">
                    {liked}k
                </p>
            </div>

            <div className="flex items-center ml-[8px]">
                
                <Repost width= {"15px"} height= {"15px"} />
                
                <p className="ml-[5px]">
                    {repost}
                </p>
            </div>

            <div className="flex items-center ml-[8px]">
                
                <Comment width= {"12px"} height= {"12px"} />
                
                <p className="ml-[5px]">
                    {comment}
                </p>
            </div>
        </div>
    )
}