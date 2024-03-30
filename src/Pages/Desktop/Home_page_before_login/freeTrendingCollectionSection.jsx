import {useContext} from 'react';
import { Link } from "react-router-dom";
import { useFetchSongs } from '../../../Custom_hooks/useFetchSongs';
import SimpleLoading from '../../../components/Loaders/simpleLoading';
import { MusicContext } from '../../../Contexts/musicContext';
import SongCardForDesktop from '../../../components/Desktop/songCardForDesktop';

function TrendingSongs() {

    const {urlObject}= useContext(MusicContext);


    const [top50, loader, error]= useFetchSongs(urlObject.musicUrl + "?limit=12");

    return (
        <div className='pb-[4rem]'>
            <div className="flex justify-center">
                <p className="text-[25px] font-normal">Hear what’s 
                    trending for free in the SoundCloud community
                </p>
            </div>

            {loader && <SimpleLoading /> }
            <div className='p-[1rem]'>
                <ul className='grid grid-row-2 grid-cols-6 justify-items-center'>
                    <SongCardForDesktop list= {top50} isLoading= {loader} />
                </ul>
            </div>

            <div className='flex justify-center'>
                <Link to={'/discover'} className="cursor-pointer text-white text-lg font-thin bg-[#f50] px-7 py-2 rounded-[4px]">
                    Explore trending playlists
                </Link>
            </div>
        
        </div>
    )
}

export default TrendingSongs;