import { useState } from "react";





export default function HeaderForAlbumPage({album, date, year, month, years}) {


    const [songList, setSongList]= useState(album.songs);

    
    let newTitle= album?.title;
    if(newTitle?.length > 30) {
        newTitle= newTitle.slice(0,30) + "...";
    }

    return (
        
        <div className="flex justify-between w-full bg-gradient-to-r from-[#ccc] to-[#333] 
                    p-[1.5rem] text-white">
            <div className="flex flex-col justify-between w-full">
                <div className="flex justify-between w-full text-[16px] px-[1rem]">
                    <div className="flex flex-row">
                        
                        <div className="ml-[1rem] w-max">
                            <div className="text-[24px] bg-black mb-[10px] p-[7px]">{newTitle}</div>
                            <div className="bg-black w-fit py-[3px] px-[7px]">{album?.artist?.[0]?.name}</div>
                        </div>
                    </div>
                
                    { album.release && <p className="text-white text-[20px] pr-[1rem] font-semibold">
                            {date}-{years[+month-1]}, {year}
                        </p> }
                </div>

                <div className="w-[90px] h-[90px] flex flex-col rounded-full justify-center items-center bg-black">
                    <p className="text-[32px] leading-[40px]">{songList?.length}</p>
                    <p className="text-[12px]">TRACKS</p>
                </div>
            </div>

            <div className={`w-[17rem] h-[12rem] bg-gradient-to-r from-[#846170] to-[#70929c]
                min-[1024px]:w-[25rem] min-[1024px]:h-[17rem] 
                min-[1440px]:w-[30rem] min-[1440px]:h-[21rem]`}>
                <img src={album.image} className="w-full h-full"/>
            </div>
           
        </div>
    )
}