
import SongTabForAlbum from "./songTabForAlbum";
import EmptyPlaylistImage from "../../../assets/Album_img_for_profile.png";
import Minor_sound_cloud_logo from "../../Logos_and_icons/minorSoundCloudLogo";
import { Link } from "react-router-dom";




export default function RenderSongPageForAlbum({list}) {


    return (
        list?.length > 0 ?
        <>
            {
                list.map((item, i) => {
                    
                    const {songId}= item;
                    const num= i+1;
                    return (
                        <Link to={`/song/${songId}`} key={num}>
                            <SongTabForAlbum  song={item} />
                        </Link>
                        
                    )
                })
            }

            <div className="flex w-full mt-[3rem]">
                <div className="border-t-[1px] border-[#999] w-[50%]"></div>
                <span className="px-[10px] mt-[-18px]">
                    <Minor_sound_cloud_logo />
                </span>
                
                <div className="border-t-[1px] border-[#999] w-[50%]"></div>
            </div>
        </>
        :
        <div className="flex flex-col justify-center items-center my-[7rem]">
            <div className="w-[300px] h-[250px]">
                <img src={EmptyPlaylistImage} alt="empty playlist" />
            </div>

            <p className="text-[18px] text-center text-[#999]">Playlist is Empty</p>
        </div>
        
    )
}