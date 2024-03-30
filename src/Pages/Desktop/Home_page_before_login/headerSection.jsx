import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Contexts/authenticationContext";


function HeaderSection() {
    
    const {set_signupform_state, set_loginform_state}= useContext(UserContext);

    
    return (
        <div className="h-[450px] bg-[url('https://a-v2.sndcdn.com/assets/images/sc_landing_header_web_featured_artists@2x-00444712.jpg')]
                bg-cover bg-no-repeat" id="header-banner-desktop">
            <div className="flex justify-between text-center p-5 pl-[30px]">
                <Link to={'/'} className="flex items-center h-[2rem]">
                    <img src="https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg" 
                    className="w-[3rem] h-full"></img>
                    <img src="https://a-v2.sndcdn.com/assets/images/wordmark@2x-8fdb346f.png" 
                    className="w-[7rem] h-[23px]"></img>
                </Link>
                <div className="flex justify-evenly h-[2rem]">
                    <button className="cursor-pointer border-[0.5px] rounded-[4px] border-solid border-white 
                        text-white text-[14px] px-4 py-[2px] mr-[10px]" 
                        onClick= {() => {set_loginform_state(true)}}>Sign in</button>
                    <button className="cursor-pointer border-0 bg-[#f50] text-white mr-[10px] px-4 py-[2px] text-[14px]
                        rounded-[4px]" 
                        onClick= {() => {set_signupform_state(true)}}>Create account</button>
                    <button className="cursor-pointer text-white text-[14px] hover:text-[#f50]">For Artists</button>
                </div>
            </div>
            <div className="flex justify-center items-center mt-[5rem]">
                <div className="flex flex-col flex-nowrap justify-center items-center text-center w-[32rem]">
                    <h2 className="text-white text-[35px] mb-1">Connect on SoundCloud</h2>
                    <p className="text-white text-[18px] font-thin text-center mb-7">
                        Discover, stream, and share a constantly expanding mix of music from emerging 
                        and major artists around the world.
                    </p>
                    <button className="text-white bg-[#f50] px-[40px] py-[10px] rounded-[4px] text-[18px]"
                        onClick= {() => {set_signupform_state(true)}}>Sign up for free</button>
                </div>
                
            </div>
        </div>
    )
}

export default HeaderSection;