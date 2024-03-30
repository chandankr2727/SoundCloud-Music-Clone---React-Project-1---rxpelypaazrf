import { useContext, useEffect, useState } from "react";
import FooterForDesktop from "../../../Pages/Desktop/FooterForDesktop";
import { UserContext } from "../../../Contexts/authenticationContext";
import Filled_follow from "../../Logos_and_icons/filledFollow";
import RefreshLogo from "../../Logos_and_icons/refreshLogo";
import { MusicContext } from "../../../Contexts/musicContext";
import { useFetchSongs } from "../../../Custom_hooks/useFetchSongs";
import ArtistTabForProfilePage from "../Profile_page_components/artistTabForPrfilePage";





export default function AsideSectionForDiscoverPage() {
    const {isAuthenticated}= useContext(UserContext);

    const {getSingers, myRandom, urlObject}= useContext(MusicContext);

    const [singerList, setSingerList]= useState([]);
    const [data, loader, error]= useFetchSongs(urlObject.filteredUrl + '{"mood":"happy"}')
    const [refresh, setRefresh]= useState(false);

    const arr= [];
    const [numArr, setNumArr]= useState([]);

    useEffect(() => {
        while(arr.length < 3) {
            const num= myRandom(11);
            let isPresent= false;

            for(let i=0; i<arr.length; i++) {
                if(num === arr[i]) {
                    isPresent= true;
                    break;
                }
            }
            !isPresent && (arr.push(num));
        }
        setNumArr(arr);
    }, [singerList, refresh])

    
    
    useEffect(() => {

        const singers= getSingers(data);
        setSingerList(singers);
    }, [data])
    

    return (
        <div className="sticky top-0 py-[6rem] px-[2rem] border-l-[1px] border-[#f2f2f2] w-full">
            {
                isAuthenticated &&
                <div className="w-full">
                    <div className="flex items-center justify-between text-[#999] py-[5px] px-[2px]
                        border-b border-[#ccc] text-[12px] w-full">
                        <div className="flex items-center">
                            <Filled_follow width= {"12px"} height= {"12px"} />
                            <p className="pl-[3px]">Artists to follow</p>
                        </div>
                        <div className="flex items-center" onClick={() => setRefresh((old) => !old)}>
                            <RefreshLogo width= {"15px"} height= {"15px"} />
                            <p className="pl-[3px]">Refresh</p>
                        </div>
                    </div>

                    { singerList && singerList.length > 0 &&
                        (<div className="w-full flex flex-col">
                            {
                                numArr?.map((item) => {
                                    const {image, name, singerId, songs}= singerList[item];

                                    return (
                                        <li key={singerId} className="flex items-center justify-between
                                             py-[0.6rem] flex-1" >
                                            <ArtistTabForProfilePage item={singerList[item]} />
                                            
                                        </li>
                                    )
                                })
                            }
                        </div>)
                    }
                </div>
            }
            <FooterForDesktop />
        </div>
    )
}