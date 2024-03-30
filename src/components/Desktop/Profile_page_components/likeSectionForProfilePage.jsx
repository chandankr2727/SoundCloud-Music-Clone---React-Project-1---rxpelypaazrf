import { useContext } from "react";
import Filled_heart from "../../Logos_and_icons/filledHeart";
import { MusicContext } from "../../../Contexts/musicContext";
import FollowingTabForProfilePage from "./followingTabForProfilePage";





// map functionn
export default function LikeSectionForProfilePage() {

    const {favourites}= useContext(MusicContext);

    return (
        <div className="px-[1rem] mt-[2rem] text-[#999]">
            <div className="flex justify-between items-center text-[14px] font-semibold
                border-b border-[#ccc] pb-[6px]">
                <div className="flex items-center">
                    <Filled_heart width={"18px"} height={"18px"} />
                    <p className="pl-[8px]">{favourites.length} likes</p>
                </div>
                <button className="">View all</button>
            </div>

            <ul className="py-[1rem] max-h-[14rem] overflow-y-scroll">
                {
                    favourites.map((item) => {
                        const {songId}= item;
                        return (
                            <li key={songId} className="flex items-center pb-[1rem]">
                                <FollowingTabForProfilePage song={item} />
                            </li>
                        )
                        
                    })
                }
                
            </ul>
        </div>
    )
}