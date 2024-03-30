

import EmptyAlbumImg from "../../../assets/Album_img_for_profile.png"


export default function AlbumsSection() {
    return (
        <div className="flex ">
            <div className="w-full pb-[10rem] flex flex-col items-center justify-start pt-[4rem]">
                <div className="mx-[auto] w-[240px] h-[180px]">
                    <img src={EmptyAlbumImg} alt="popular tracks" />
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-[18px] pt-[1rem]">Seems a little quiet over here</p>
                    <p className="text-[14px] text-[#38d] font-semibold pt-[1rem]
                        hover:text-[#111] cursor-pointer">Upload a track to share it with your followers.</p>
                    <button className="mt-[1rem] bg-[#f50] text-white text-[16px] px-[1rem] py-[0.5rem]
                        rounded-[3px]">Upload Now</button>
                </div>
                
            </div>

        </div>

    )
}