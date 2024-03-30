import Add_to_playlist from "../../../components/Logos_and_icons/addToplaylist";
import Next_in_queue from "../../../components/Logos_and_icons/nextInQueue";




export default function MoreOptionModalForSongCard() {
    return (
        <div className="absolute w-max text-[12px] bg-white rounded-[5px] border border-[#ccc]
            shadow-[0px_5px_15px_rgba(0,0,0,0.25)] z-10">
            <div className="flex items-center px-[1rem] py-[5px]">
                <Next_in_queue width={"16px"} height={"16px"} />
                <p className="pl-[8px]">Add to Next-up</p>
            </div>
  
            <div className="flex items-center px-[1rem] py-[5px] border-t border-[#ccc]">
                <Add_to_playlist width={"16px"} height={"16px"} color={"#000000"} />
                <p className="pl-[8px]">Add to playlist</p>
            </div>
        </div>
    )
}