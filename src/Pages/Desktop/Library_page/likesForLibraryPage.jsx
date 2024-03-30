
import { useState } from "react";
import EmptyLikesImg from "../../../assets/Empty_like_section_for_library.png"
import ShowEmptySection from "../../../components/Desktop/Library_page/showEmptySection"
import { useContext } from "react";
import { MusicContext } from "../../../Contexts/musicContext";
import SongCardForDesktop from "../../../components/Desktop/songCardForDesktop";




export default function LikesForLibraryPage() {
    const {favourites}= useContext(MusicContext);

    const [isLoading, setIsLoading]= useState(false);

    return (
            favourites.length === 0  ? ( 
                    <div className="w-full h-full flex flex-col justify-center items-center">
                        <ShowEmptySection 
                            image={EmptyLikesImg} 
                            message={"You have no likes yet"}
                            linkMessage={"Browse trending playlists"} 
                        />
                    </div> 
                )
                :
                (
                    <div className="my-[2rem] mx-[5px] w-fit min-[1024px]:mx-[30px] min-[1150px]:mx-[20px] 
                        min-[960px]:w-[auto]">
                        <p className="text-[18px] text-[#999]">Hear the tracks you’ve liked:</p>

                        <ul className="flex flex-row overflow-x-scroll gap-[2rem] py-[2rem]">
                            <SongCardForDesktop list= {favourites} isLoading= {isLoading} />
                        </ul>

                    </div>
                )
    )
}




