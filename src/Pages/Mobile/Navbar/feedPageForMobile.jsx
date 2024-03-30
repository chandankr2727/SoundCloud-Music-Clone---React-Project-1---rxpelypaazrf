import { useContext, useState } from "react";
import FollowButtonForMobile from "../../../components/Mobile/followButtonForMobile";
import { MusicContext } from "../../../Contexts/musicContext";
import { useFetchSongs } from "../../../Custom_hooks/useFetchSongs";
import { useEffect } from "react";




function FeedPageForMobile() {



    const {getSingers, urlObject}= useContext(MusicContext);

    const [songList, loader1, error1]= useFetchSongs(urlObject.musicUrl);

    const [singerList, setSingerList]= useState([]);

    useEffect(() => {
        
        const arr= getSingers(songList);
        setSingerList(arr);

    }, [songList]);



    let i=0;

    return (
        <>

            <div className="p-[1rem] text-white bg-black">
                <p className="text-[2rem] font-bold">Feed</p>
                <p className="text-[14px] text-[#999] font-semibold py-[0.5rem]">Follow friends and artists to fill your feed with reposts</p>

                <ul className="">
                    {
                        singerList?.map((item) => {
                            const {singerName, singerImage, singerId}= item;

                            return(
                                <li key={i++} className="flex flex-nowrap justify-between my-[1rem] items-center">
                                    <FollowButtonForMobile name= {singerName} image= {singerImage} artistId={singerId}/>
                                </li>

                            ) 
                        })
                        
                    }
                </ul>
            </div>
            
        </>
    )
}

export default FeedPageForMobile;