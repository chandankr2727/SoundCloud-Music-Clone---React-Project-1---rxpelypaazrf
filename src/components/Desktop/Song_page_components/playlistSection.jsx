import { Link } from "react-router-dom";
import MetaInfoOfSong from "../metaInfoOfSong";





export default function PlaylistSection({list, listOfAlbums}) {

    
    
    return(
        list.map((item, index) => {
            const {title, image, artist, songId, albumId}= item;

            let newTitle= title;

            if(title.length > 17) {
                newTitle= title.slice(0, 17) + '...';
            }

            return(
                <li key={index} className="flex my-[10px]">
                    <Link to={`/sets/${artist?.[0]?.name}/${albumId}`}>
                        <div className="relative w-[60px] h-[60px] bg-gradient-to-r from-[#ccc] to-[#333] hover:opacity-60">
                            <img src={image} alt={newTitle} />

                            {/* <div className={`absolute w-full h-full flex flex-col items-center justify-end 
                                top-0 left-0 right-[25%] bottom-0 opacity-0 
                                hover:opacity-100`}>
                                <button className='bg-[#f50] absolute bottom-[13%] w-[37px] h-[37px] rounded-full pl-[4px] mb-[3px]
                                    flex items-center justify-center hover:bg-[#d74800]'>
                                    <svg className="fill-white h-[27px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"> 
                                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                                    </svg>
                                </button>
                            </div> */}
                        </div>
                    </Link>
                    <div className="text-[11px] ml-[10px]">
                        <Link to={`/sets/${artist?.[0]?.name}/${albumId}`}>
                            <p className="text-[#999] text-[13px] mt-[-5px]">{artist[0]?.name}</p>
                            <p className="text-[13px] mt-[-2px] hover:text-[#f50]">{newTitle}</p>
                        </Link>
                        <MetaInfoOfSong />
                    </div>
                    
                </li>
            )
        })
    )
}