import { useContext} from "react";
import AsideSectionForDiscoverPage from "../../components/Desktop/Discover_page_components/asideSectionForDiscoverPage";
import { MusicContext } from "../../Contexts/musicContext";
import NavbarForDesktop from "./navbarForDesktop";
import { useFetchSongs } from "../../Custom_hooks/useFetchSongs";
import RenderSongInFeedPage from "../../components/Desktop/Feed_page_components/renderSongInFeedPage";





export default function FeedPageForDesktop() {

    const {urlObject}= useContext(MusicContext);

    const [feedList, loader, error]= useFetchSongs(urlObject.filteredUrl + '{"mood":"romantic"}');

    return (
        <>
            <NavbarForDesktop />
            <div className="mx-[10px] h-full flex pt-[4rem] 
                min-[768px]:mx-[2rem] min-[1024px]:mx-[4rem] min-[1200px]:mx-[9rem]">    
                <div className="px-[2rem]">
                    <p className="text-[19px] text-[#999] py-[1rem]">Hear the latest posts from the people you’re following:</p>

                    <ul className="mb-[5rem]">
                        {
                            feedList.map((item) => {
                                
                                const {songId}= item;
                                return (
                                    <li key={songId} className="py-[1rem]">
                                        <RenderSongInFeedPage song= {item} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="sticky top-0">
                    <AsideSectionForDiscoverPage />
                </div>
            </div>
        </>
        
    )
}