import { useContext } from "react"
import { UserContext } from "../../../Contexts/authenticationContext"




export default function HeaderOfProfilePage() {
    const {firstLetterOfUsername, username}= useContext(UserContext);

    return (
        <div className="flex w-full  bg-gradient-to-r from-[#70929c] to-[#846170] 
            p-[2rem] text-white mb-[5px]">
            <div className="bg-gradient-to-r from-[#846170] to-[#70929c] rounded-full 
                w-[13rem] h-[13rem] flex justify-center items-center text-[8rem]
                pb-[2rem]">
                {firstLetterOfUsername}
            </div>

            <div className="ml-[2rem]">
                <p className="bg-black px-[10px] py-[5px] w-max text-[23px] ">{username}</p>
                <p className="bg-black px-[10px] py-[2px] w-max mt-[5px]">{username}</p>
            </div>
        </div>
    )
}