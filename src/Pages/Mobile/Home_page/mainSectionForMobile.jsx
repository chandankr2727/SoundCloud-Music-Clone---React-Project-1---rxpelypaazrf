import { useContext, useEffect } from "react";
import SongCardForMobile from "../../../components/Mobile/songCardForMobile";
import { MusicContext } from "../../../Contexts/musicContext";
import { fetch_data } from "../../../Utils/fetchFunctions";
import { useState } from "react";
import { extractDataFromSongList } from "../../../Utils/mapFunctions";
import SongTabForMobile from "../../../components/Mobile/songTabForMobile";



function MainSectionForMobile() {
    const {urlObject, projectId}= useContext(MusicContext);

    const [top50, setTop50]= useState([]);
    const [trending, setTrending]= useState([]);
    const [excited, setExcited]= useState([]);

    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        setIsLoading(true);
        try {
            
            if(!trending || trending.length === 0) {
                try {
                    fetch_data(urlObject.filteredUrl + '{"mood":"romantic"}', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setTrending(mappedData));
                }catch(error) {
                    console.log(error);
                }
            }

            if(!top50 || top50.length === 0) {
                try {
                    fetch_data(urlObject.musicUrl + '?limit=20', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setTop50(mappedData));

                }catch(error) {
                    console.log(error);
                }
            }

            if(!excited || excited.length === 0) {
                try {
                    fetch_data(urlObject.filteredUrl + '{"mood":"excited"}', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setExcited(mappedData));
                }catch(error) {
                    console.log(error);
                }
            }
        } catch(error) {
                console.log("error: ", error);
        } finally {
            setIsLoading(false);
        }
    }, [])


    return (
        <div className="mx-[15px]">
            <div className="mt-[5px]">
                <p className="text-white text-[22px] font-semibold pb-[10px]">
                    Trending tracks on SoundCloud
                </p>

                <ul className="h-[450px] overflow-scroll ">
                    {
                        trending.map((album, index) => {
                            return (
                                <SongTabForMobile song={album} index= {index} />
                            )
                        })
                    }
                </ul>
            </div>

            <button className="bg-white mt-[20px] mb-[15px] w-full text-[14px] font-semibold py-[10px] rounded-[4px]">
                See all tracks
            </button>

            <div className="text-white mt-[1.5rem]">
                <p className="text-[22px] font-bold">Charts: Top 20</p>
                <p className="text-[#999] text-[14px] mt-[5px]">The most played tracks on SoundCloud this week</p>

                <ul className="flex flex-row overflow-scroll gap-[2rem] py-[1.5rem] ul-list">
                        <SongCardForMobile list= {top50} />
                </ul>
            </div>

            <div className="text-white mt-[1.5rem]">
                <p className="text-[22px] font-bold">Charts: Trending</p>
                <p className="text-[#999] text-[14px] mt-[5px]">Up-and-coming tracks on SoundCloud</p>

                <ul className="flex flex-row overflow-scroll gap-[2rem] py-[1.5rem] ul-list">
                    <SongCardForMobile list= {excited} />
                </ul>
            </div>
        </div>
    )
}

export default MainSectionForMobile;