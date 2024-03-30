
import ImageForSongCard from "./Discover_page_components/imageForSongCard";




function SongCardForDesktop(props) {

    const {list, isLoading}= props;

    return (
        list.map((album, i) => {
            const {artist, title}= album;
            
            let slicedTitle= title;
            if(title.length > 10) {
                slicedTitle= title.slice(0, 13) + "...";
            }
            return(
                <li key={i} className="relative">
                                        
                    <ImageForSongCard album={album} />

                    <div className={`pt-[10px] ${isLoading && 'bg-[#00000] w-[6rem] h-[2rem]'}`}>
                        <div className="text-[14px]">{slicedTitle}</div>
                        <div className="text-[12px] text-[#999]">{artist?.[0]?.name}</div>
                    </div>

                </li>
            )
        })
    )
}

export default SongCardForDesktop;