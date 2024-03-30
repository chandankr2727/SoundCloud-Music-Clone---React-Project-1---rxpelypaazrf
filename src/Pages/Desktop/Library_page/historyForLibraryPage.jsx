

import EmptyHistoryImg from "../../../assets/Empty_history_section_for_library.png";




export default function HistoryForLibraryPage() {
    return (
        <div className="w-full flex flex-col items-center pt-[8rem] pb-[9rem]">
            <div className="w-[230px] h-[260px]">
                <img src={EmptyHistoryImg} />
            </div>
            
            <div className="flex flex-col justify-center items-center">
                <p className="text-[18px]">You have no listening history yet.</p>
                
            </div>
            
        </div>
    )
}