import Broadcast from "../../../components/Logos_and_icons/broadcast";






export default function StationsForLibraryPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center pt-[7rem] pb-[9rem]">
            
            <Broadcast width={"230px"} height={"260px"} color={"#f2f2f2"} />
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-[18px]">You have not liked any stations yet</p>
                <p className="text-[14px] text-[#38d] hover:text-[#111] font-semibold">Browse trending playlists</p>
            </div>
            
        </div>
    )
}