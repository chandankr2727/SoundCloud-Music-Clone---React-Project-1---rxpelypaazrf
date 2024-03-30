import { Link } from "react-router-dom";
import PersonFilled from "../../Logos_and_icons/personFilled";
import TracksLogo from "../../Logos_and_icons/tracksLogo";
import FollowButtonForDesktop from "../followButtonForDesktop";
import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../../../Contexts/musicContext";






export default function ArtistTabForProfilePage({item}) {

    const {myRandom}= useContext(MusicContext);
    const {singerImage, singerName, singerId, songs}= item;


    const [likes, setLikes]= useState(myRandom(20));

    return (
        <>
            <div className="flex items-center">
                <Link to={`/artist/${singerName}`}>
                    <div className="w-[50px] h-[50px] rounded-full
                        bg-gradient-to-r from-[#ccc] to-[#333] cursor-pointer">
                        <img src={singerImage} className="rounded-full"/>
                    </div>
                </Link>
                
                <div className="text-[11px] ml-[10px]">
                    <Link to={`/artist/${singerName}`}>
                        <p className="w-max text-[#111] text-[14px] mt-[-5px]
                            hover:text-[#f50]">{singerName}</p>
                    </Link>
                    
                    <div className="flex items-center ml-[-3px] text-[#111] text-[11px] 
                        mt-[4px] font-semibold">
                        <div className="flex items-center hover:text-[#999]">
                            
                            <PersonFilled width= {"16px"} height= {"16px"}/> 
                            
                            <p className="ml-[5px] text-[#999]">
                                {likes}k
                            </p>
                        </div>

                        <div className="flex items-center ml-[1rem] hover:text-[#999]">
                            
                            <TracksLogo width= {"14px"} height= {"14px"} />
                            
                            <p className="ml-[8px] text-[#999]">
                                {songs?.length}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FollowButtonForDesktop singerId={singerId}/>
            
        </>
    )
}