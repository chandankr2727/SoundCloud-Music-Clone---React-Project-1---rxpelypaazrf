import { useContext, useState } from "react";
import Filled_followers from "../../Logos_and_icons/filledFollowers";
import Rhythm from "../../Logos_and_icons/rhythm";
import FollowButtonForDesktop from "../followButtonForDesktop";
import { MusicContext } from "../../../Contexts/musicContext";
import Report from "../../Logos_and_icons/report";




export default function ArtistSection({name, image, singerId, songs}) {
    const {myRandom}= useContext(MusicContext);

    
    const [followers, setFollowers]= useState(myRandom(8000))

    return (
        <div>
            <img className="w-[145px] h-[125px] rounded-full bg-gradient-to-r from-[#846170] to-[#70929c]" 
                src={image}/>
            <div className="text-[16px] mt-[0.5rem] ">{name}</div>
            
            <div className="flex mt-[0.5rem] text-[14px]">
                <div className="flex">
                    <Filled_followers />
                
                    <p className="text-[#999] ml-[5px]">
                        {followers}
                    </p>
                </div>
                
                <div className="flex ml-[1rem]">
                    <Rhythm />
                    <p className="text-[#999] ml-[5px]">
                        {songs?.length}
                    </p>
                </div>
            </div>

            <FollowButtonForDesktop singerId= {singerId}/> 
            

            <div className="flex mt-[2rem] items-center">
                <Report />

                <div className="text-[12px] ml-[5px]">
                    Report
                </div>
            </div>  
        </div>
    )
}