import { Link } from "react-router-dom";




function SongCardForMobile(props) {

    const {list}= props;
    return (
        list.map((album, i) => {
            const {artist, image, title, songId}= album;
            
            let slicedTitle= title;
            if(title.length > 10) {
                slicedTitle= title.slice(0, 17) + "...";
            }

            return(
                <li key={i} className="">
                    <Link to={`/song/${songId}`} >
                        <div className="relative w-[8rem] h-[8rem]">
                            <img className="relative rounded-[5px] z-30 bg-gradient-to-r from-[#846170] to-[#70929c]
                                drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)]" 
                                src={image} alt={title}></img>

                            <div className="absolute left-[5px] top-[5px] bg-white w-[8rem] h-full z-20
                                bg-gradient-to-r from-[#70929c] to-[#846170] rounded-[5px]
                                drop-shadow-[2px_2px_4px_rgba(0,0,0,0.3)] opacity-60">
                                </div>

                            <div className="absolute left-[10px] top-[12px] bottom-[-11px] bg-[#999] w-[8rem] z-10
                                bg-gradient-to-r from-[#846170] to-[#8e8485] rounded-[5px] opacity-40
                            ">           
                            </div>
                        </div>
                        
                    </Link>

                    <div className="pt-[10px]">
                        <div className="">{slicedTitle}</div>
                        <div className="text-[#999]">{artist?.[0]?.singerName}</div>
                    </div>
                </li>
            )
        })
    )
}


export default SongCardForMobile;