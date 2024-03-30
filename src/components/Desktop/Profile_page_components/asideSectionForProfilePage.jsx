import { useContext } from "react";
import FavArtistSectionForProfilePage from "./favArtistSectionForProfilePage";
import LikeSectionForProfilePage from "./likeSectionForProfilePage";
import { MusicContext } from "../../../Contexts/musicContext";
import FooterForDesktop from "../../../Pages/Desktop/FooterForDesktop";




export default function AsideSectionForProfilePage() {
    const {favourites, favArtists}= useContext(MusicContext);

    
    return (
        <div className="w-min pb-[10rem] flex flex-col border-l border-[#ccc] my-[1.5rem] px-[1.3rem]">
            <div className="flex items-center text-[#999] font-semibold">
                <div className="my-[1rem] px-[1rem] border-r border-[#ccc] hover:text-[#111] cursor-pointer">
                    <p className="text-[12px] pt-[0.5rem] pr-[2rem]">Likes</p>
                    <p className="text-[20px] mt-[-6px]">{favourites.length}</p>
                </div>
                <div className="my-[1rem] px-[1rem] border-r border-[#ccc] hover:text-[#111] cursor-pointer">
                    <p className="text-[12px] pt-[0.5rem] pr-[2rem]">Following</p>
                    <p className="text-[20px] mt-[-6px]">{favArtists.length}</p>
                </div>
                <div className="my-[1rem] px-[1rem] hover:text-[#111] cursor-pointer">
                    <p className="text-[12px] pt-[0.5rem] pr-[2rem]">Tracks</p>
                    <p className="text-[20px] mt-[-6px]">{0}</p>
                </div>
            </div>

            { favourites.length > 0 && 
                <LikeSectionForProfilePage />
            }

            {
                favArtists.length > 0 && 
                <FavArtistSectionForProfilePage />
            }

            <FooterForDesktop />
        </div>
    )
}