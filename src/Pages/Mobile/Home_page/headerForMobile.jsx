import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../../../Contexts/authenticationContext";




function HeaderForMobile() {
    const {set_loginform_state, isAuthenticated}= useContext(UserContext);
    
    
    return (
        <nav className="bg-black flex text-white justify-between items-center py-[15px]">
            <div className="flex">
                <img src="https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg" 
                className="w-[30px] h-full ml-[1rem] min-[320px]:w-[2.5rem]"></img>
                <img src="https://a-v2.sndcdn.com/assets/images/wordmark@2x-8fdb346f.png" 
                className="w-[80px] h-[15px] mr-[5px] hidden min-[263px]:block min-[320px]:w-[100px] min-[320px]:h-[20px]"></img>
            </div>

            <div className="flex flex-row no-wrap text-[13px]">
                {
                    !isAuthenticated && <button className="font-medium mr-[10px] min-[375px]:mr-[20px]"
                    onClick={() => {set_loginform_state(true)}}>Sign in</button>
                }

                <NavLink to={'/discover'}
                     className= "mr-[10px] py-[8px] px-[15px] bg-white text-black rounded-[4px]">Listen in app</NavLink>

            </div>

        </nav>
    )
}

export default HeaderForMobile;

// 