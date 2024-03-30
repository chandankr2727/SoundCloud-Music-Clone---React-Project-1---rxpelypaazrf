import { Link } from "react-router-dom"
import Broadcast from "../../../components/Logos_and_icons/broadcast"
import Distribute from "../../../components/Logos_and_icons/distribute"
import Filled_follow from "../../../components/Logos_and_icons/filledFollow"
import Filled_followers from "../../../components/Logos_and_icons/filledFollowers"
import Filled_heart from "../../../components/Logos_and_icons/filledHeart"
import FilledStar from "../../../components/Logos_and_icons/filledStar"
import PersonFilled from "../../../components/Logos_and_icons/personFilled"
import TracksLogo from "../../../components/Logos_and_icons/tracksLogo"
import { useContext } from "react"
import { UserContext } from "../../../Contexts/authenticationContext"





export default function ProfileModal() {

    const {username}= useContext(UserContext);

    const arr= [{'name': "Profile", path: `user/${username}/all`, 'src': <PersonFilled width={"18px"} height={"18px"} color={"#333"}/>},
                {'name': 'Likes', path: "you/likes", 'src': <Filled_heart width={"17px"} height={"17px"} color={"#333"}/>},
                {'name': 'Stations', path: "you/stations", 'src': <Broadcast color={"#333"}/>},
                {'name': 'Following', path: "you/following", 'src': <Filled_followers color={"#333"}/>},
                {'name': 'Who to follow', path: "you/follow", 'src': <Filled_follow color={"#333"}/>},
                {'name': 'try Next Pro', path: "you/pro", 'src': <FilledStar width={"15px"} height={"15px"} color={"#333"}/>},
                {'name': 'Tracks', path: "you/tracks", 'src': <TracksLogo color={"#333"}/>},
                {'name': 'Distribute', path: "you/distribute", 'src': <Distribute width={"18px"} height={"18px"} color={"#333"}/> }, ]
    return (
        <div id="profileModal" className="absolute top-[3rem] bg-white border border-[#f2f2f2] w-[10rem] 
            z-20 shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] text-[#333] font-bold text-[13px]">
            {
                arr.map((item) => {
                    const {name, src, path}= item;
                    
                    return (
                        <Link key={name} to={`/${path}`}>
                            <div className="flex items-center p-[8px] hover:bg-[#f2f2f2]">
                                {src}
                                <p className="ml-[10px]">{name}</p>
                            </div>

                        </Link>
                        
                    )
                })

            }
        </div>
    )
}