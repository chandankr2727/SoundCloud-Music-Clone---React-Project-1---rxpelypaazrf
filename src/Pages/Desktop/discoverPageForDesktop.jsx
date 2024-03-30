import { useContext, useState } from "react";
import AsideSectionForDiscoverPage from "../../components/Desktop/Discover_page_components/asideSectionForDiscoverPage";
import RenderCategoriesInDiscoverPageForDesktop from "../../components/Desktop/Discover_page_components/renderCategoriesOfDiscoverPageForDesktop";
import NavbarForDesktop from "./navbarForDesktop";
import { UserContext } from "../../Contexts/authenticationContext";
import { MusicContext } from "../../Contexts/musicContext";
import ImageForAlbumCard from "../../components/Desktop/Discover_page_components/imageForAlbumCard";
import { useFetchAlbums } from "../../Custom_hooks/useFetchAlbums";



export default function DiscoverPageForDesktop() {

    const {showLogInForm, showSignUpForm}= useContext(UserContext);
    const {urlObject}= useContext(MusicContext);

    const [listOfAlbums, loader, error]= useFetchAlbums(urlObject.albumsUrl + '?limit=20');
    const [isLoading, setIsLoading]= useState(false);
    
    return (
        <div className={(showLogInForm || showSignUpForm) ? "w-full fixed pointer-events-none grayscale-[80%]"
            : "relative w-full"}>
            <NavbarForDesktop />

            <div className="mx-[10px] h-full flex 
                min-[768px]:mx-[2rem] min-[1024px]:mx-[4rem] min-[1200px]:mx-[9rem]">
                <div className="pt-[4rem] w-3/4 px-[1.5rem] border-r-[1px] border-[#f2f2f2] 
                    min-[1238px]:px-[2.5rem] ">
                    {
                        <RenderCategoriesInDiscoverPageForDesktop />
                    }

                    <div>
                        <p className="text-[24px] pt-[1.5rem] border-t-[1px] border-[#f2f2f2]">Albums</p>

                        <ul className="flex flex-row overflow-x-scroll overflow-y-hidden 
                            gap-[2rem] pt-[1.5rem] pb-[6rem]">

                            {
                                !isLoading && listOfAlbums.map((album, i) => {
                                    const {artist, title}= album;
                                    
                                    let slicedTitle= title;
                                    if(title.length > 10) {
                                        slicedTitle= title.slice(0, 13) + "...";
                                    }

                                    return(
                                        <li key={i} className="relative">
                                                                
                                            <ImageForAlbumCard album={album} />
                                            <div className={`pt-[10px] bg-[#00000] w-[6rem] h-[2rem]`}>
                                                <div className="text-[14px]">{slicedTitle}</div>
                                                <div className="text-[12px] text-[#999]">{artist?.[0]?.name}</div>
                                            </div>

                                        </li>
                                    )
                                })  
                            }                            
                        </ul>
                    </div>

                </div>
                <div className="sticky top-0">
                    <AsideSectionForDiscoverPage />
                </div>
            </div>
        </div>
        
    )
}