

import EmptyPlaylistImg from "../../../assets/Album_img_for_profile.png";
import ShowEmptySection from "../../../components/Desktop/Library_page/showEmptySection";




export default function PlaylistsForLibraryPage() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <ShowEmptySection 
                image={EmptyPlaylistImg} 
                message={"You have no playlists yet"}
                linkMessage={"Browse trending playlists"} 
            />
        </div>
    )
}