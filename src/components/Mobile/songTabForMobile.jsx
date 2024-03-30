import { Link } from "react-router-dom";






export default function SongTabForMobile({song, index}) {

    const {artist, image, title, songId}= song; 

    return(
        <Link to={`/song/${songId}`} key={index * 10} >
            <li className="flex text-white py-[15px]">
                <img src={image} alt={title}
                    className="w-[5rem] rounded-[4px] min-[425px]:w-[6.5rem]"></img>
                <div className="pl-[1rem]">
                    <div className="h-[1.5rem] overflow-hidden">{title}</div>
                    <div className="text-[#999]">{artist?.[0]?.name}</div>
                    <div className="text-[#999]">song</div>
                </div>
            </li>
        </Link>
    )
}