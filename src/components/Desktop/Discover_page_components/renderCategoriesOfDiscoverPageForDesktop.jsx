import { useContext, useEffect, useState } from "react";
import {MusicContext } from "../../../Contexts/musicContext";
import SongCardForDesktop from "../songCardForDesktop";
import { extractDataFromSongList } from "../../../Utils/mapFunctions";
import { fetch_data } from "../../../Utils/fetchFunctions";




function RenderCategoriesInDiscoverPageForDesktop() {
    const {projectId, urlObject}= useContext(MusicContext);


    const [top50, setTop50]= useState([]);
    const [trending, setTrending]= useState([]);
    const [excited, setExcited]= useState([]);
    const [sad, setSad]= useState([]);
    const [romantic, setRomantic]= useState([]);
    const [happy, setHappy]= useState([]);

    const [isLoading, setIsLoading]= useState(false);

    const discoverPathArray= [{'category': 'Charts: Top 50', 'list': top50},
    {'category': 'Charts: New & hot', 'list': trending},
    {'category': 'Excited', 'list': excited},
    {'category': 'Romantic', 'list': romantic},
    {'category': 'Happy', 'list': happy},
    {'category': 'Sad', 'list': sad},
    ];


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

            if(!romantic || romantic.length === 0) {
                try {
                    fetch_data(urlObject.filteredUrl + '{"mood":"romantic"}', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setRomantic(mappedData));
                }catch(error) {
                    console.log(error);
                }
            }

            if(!happy || happy.length === 0) {
                try {
                    fetch_data(urlObject.filteredUrl + '{"mood":"happy"}', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setHappy(mappedData));
                }catch(error) {
                    console.log(error);
                }
            }

            if(!sad || sad.length === 0) {
                try {
                    fetch_data(urlObject.filteredUrl + '{"mood":"sad"}', projectId)
                    .then((data) => extractDataFromSongList(data))
                    .then((mappedData) => setSad(mappedData));
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
        <>
                <p className="text-[32px] font-semibold pb-[1rem]">Discover Tracks and Playlists</p>
                {
                    discoverPathArray.map((item, i) => {
                        return(
                            <div key={i * -1}>
                                <p className="text-[24px] pt-[1.5rem] border-t-[1px] border-[#f2f2f2]">{item.category}</p>

                                <ul className="flex flex-row overflow-x-scroll overflow-y-hidden 
                                    gap-[2rem] pt-[1.5rem] pb-[6rem]">

                                    <SongCardForDesktop list= {item.list} isLoading={isLoading}/>                               
                                </ul>
                            </div>
                        )
                    })
                }
            
        </>
    )
}

export default RenderCategoriesInDiscoverPageForDesktop;