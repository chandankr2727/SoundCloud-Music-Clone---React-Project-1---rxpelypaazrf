


import EmptyRepostImg from "../../../assets/Repost_img_for_profile.png"



export default function RepostSection() {
    return (
        <div className="flex ">
            <div className="w-full pb-[10rem] flex flex-col items-center justify-start pt-[4rem]">
                <div className="mx-[auto] w-[240px] h-[180px]">
                    <img src={EmptyRepostImg} alt="tracks" />
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-[18px] pt-[1rem]">You haven’t reposted any sounds.</p>
                    <p className="text-[14px] text-[#38d] font-semibold pt-[1rem]
                        hover:text-[#111] cursor-pointer">Learn about reposts</p>
                </div>
                
            </div>

        </div>
    )
}