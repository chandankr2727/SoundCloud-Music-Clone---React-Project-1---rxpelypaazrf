import { useContext, useState} from "react"
import { MusicContext } from "../../../Contexts/musicContext"
import { Link } from "react-router-dom";
import Play_button_small from "../../../components/Logos_and_icons/playButton_small";
import FooterForMobile from "../Home_page/footerForMobile";







export default function LikedSongs() {
    const {favourites, myRandom}= useContext(MusicContext);

    const [played, setPlayed]= useState(myRandom(200));

    return (    
        <>
            <div className="text-white h-full px-[1rem] mt-[1rem]">
                <div className="flex items-center mb-[2rem]">
                    <Link to={`/you`}>
                        <button className="border border-white bg-black px-[10px] py-[3px] rounded-[4px] 
                                hover:bg-[white] hover:text-[#000000]">
                            Back
                        </button>
                    </Link>

                    <div className="pl-[2rem] text-[20px] font-semibold">
                        Likes
                    </div>
                </div>
                
                <ul className="h-[70vh] overflow-y-scroll">
                    {
                        favourites.map((song, index) => {
                            const {artist, image, songId, title}= song;

                            return (
                                <li key={songId} className="flex items-center pb-[1rem]">
                                    <div className="w-[102px] h-[102px] rounded-[4px] py-[7px] bg-cover
                                        border border-[#8080804d] min-[425px]:w-[6.5rem]">
                                        <img src={image} alt={title} className="w-full h-full"/>
                                    </div>
                                
                                    <div className="pl-[1rem] text-[13px]">
                                        <div className="h-[1.5rem] text-[14px] overflow-hidden">{title}</div>
                                        <div className="text-[#999]">{artist?.[0]?.name}</div>
                                        <div className="text-[#999]">
                                            <div className="flex items-center">
                                                <Play_button_small />
                                                {played}k
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                
            </div>

            <FooterForMobile />
            
        </>
    )
}