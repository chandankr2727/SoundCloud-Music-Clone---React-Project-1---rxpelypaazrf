

import { useContext, useEffect, useState } from "react";
import EmptyFollowingImg from "../../../assets/Empty_following_section_for_library.png";
import ShowEmptySection from "../../../components/Desktop/Library_page/showEmptySection";
import { MusicContext } from "../../../Contexts/musicContext";
import { fetch_data } from "../../../Utils/fetchFunctions";
import { mapArtistData } from "../../../Utils/mapFunctions";
import FollowButtonForDesktop from "../../../components/Desktop/followButtonForDesktop";



export default function FollowingForLibraryPage() {

    const {favArtists, urlObject, projectId}= useContext(MusicContext);

    const [artistList, setArtistList]= useState([]);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        setIsLoading(true);
        let list= [];
        try {   
            favArtists.forEach((item) => {
                fetch_data(urlObject.artistUrl + item, projectId)
                .then((data) => {
                    const mappedData= mapArtistData(data);
                    list= [...list, mappedData];
                    setArtistList(list);
                })
                
            })
        } catch(error) {
            console.log("error in fatching artists: ", error);
        } finally {
            setIsLoading(false);
        }
    }, []);
    return (
        favArtists.length === 0 ? (
            <div className="w-full h-full flex flex-col justify-center items-center">
                    <ShowEmptySection 
                        image={EmptyFollowingImg} 
                        message={"You aren’t following anyone yet"}
                        linkMessage={"Browse trending playlists"} 
                    />
            </div>
        )
        :
        (
            <div className="my-[2rem] mx-[5px] w-fit min-[1024px]:mx-[30px] min-[1150px]:mx-[20px] 
                min-[960px]:w-[auto]">
                <p className="text-[18px] text-[#999]">Hear what the people you follow have posted:</p>
                <ul className="relative flex flex-row overflow-x-scroll gap-[2rem] py-[2rem]">
                    {
                        artistList.map((item)=> {
                            const {singerImage, singerName, singerId}= item;

                            let slicedName= singerName;
                            if(singerName.length > 10) {
                                slicedName= singerName.slice(0, 13) + "...";
                            }
                            return (
                                <li key={singerName} className="flex flex-col justify-center">
                                    <div className="w-[133px] h-[136px] rounded-full">
                                        <img src={singerImage} alt={singerName} className="rounded-full"/>
                                    </div>

                                    <div className="flex flex-col items-center mt-[10px]">
                                        <p className="text-[14px]">{singerName}</p>
                                        <FollowButtonForDesktop singerId={singerId}/>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    )
}

        