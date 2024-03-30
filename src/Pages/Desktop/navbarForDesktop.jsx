import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import NotificationLogo from "../../components/Logos_and_icons/notificationLogo";
import MessageLogo from "../../components/Logos_and_icons/messageLogo";
import { UserContext } from "../../Contexts/authenticationContext";
import MoreButtonLogo from "../../components/Logos_and_icons/moreBottonLogo";
import AboutUsModal from "../../Portal/Destop/AboutUs_portal/aboutUsModal";
import ChevronDownLogo from "../../components/Logos_and_icons/chevronDownLogo";
import ProfileModal from "../../Portal/Destop/Profile_portal/profileModal";
import { closeTheModal, openTheModal } from "../../Utils/localStorageFunctions";



function NavbarForDesktop() {

    const {isAuthenticated, firstLetterOfUsername, set_signupform_state, 
            set_loginform_state}= useContext(UserContext);

    const [showAboutUsModal, setShowAboutUsModal]= useState(false);

    const [showProfileModal, setShowProfileModal]= useState(false);

    
    return (
        <div className="fixed w-full bg-[#333] flex justify-center items-center z-10 mb-[2rem]">
            <nav className="bg-[#333] text-white flex items-center mx-[5px] 
                min-[1024px]:mx-[30px] min-[1200px]:mx-[50px] h-[3rem] text-[14px]">
                <NavLink to={isAuthenticated ? '/discover' : '/'} className="flex items-center h-[3rem] bg-black p-[0.7rem]">
                    <img src="https://a-v2.sndcdn.com/assets/images/peace-cloud-28ad0963.svg" 
                    className="w-[3rem] h-full"></img>
                    <img src="https://a-v2.sndcdn.com/assets/images/wordmark@2x-8fdb346f.png" 
                    className={`w-[115px] h-[23px] hidden ${isAuthenticated && 'hidden'} 
                        min-[895px]:${isAuthenticated ? 'hidden' : 'block'} min-[1200px]:block`}></img>
                </NavLink>

                {/* */}
                <div className="flex items-center">
                    <NavLink to={'/discover'} 
                        className={({isActive})=> isActive ? 'bg-black' : 'bg-transparent'}>
                        <div className="px-[1rem] pb-[14px] pt-[13px] border-black border-r-[1px] font-light cursor-pointer 
                            min-[1078px]:px-[2.5rem] ">
                            Home
                        </div>
                    </NavLink>
                    <NavLink to={isAuthenticated ? '/feed' : {pathname: '/signin', search: '?you=feed'}} 
                        className={({isActive})=> isActive ? 'bg-black' : 'bg-transparent'}>
                        <div className="px-[1rem] pb-[14px] pt-[13px] font-light cursor-pointer text-[#ccc] 
                            min-[1078px]:px-[2.5rem] border-black border-r-[1px] hover:text-white ">
                            Feed
                        </div>
                    </NavLink >
                    <NavLink to={isAuthenticated ? '/you/library' : {pathname: '/signin', search: '?you=library'}} 
                        className={({isActive})=> isActive ? 'bg-black' : 'bg-transparent'}>
                        <div className="px-[1rem] pb-[14px] pt-[13px] font-light cursor-pointer text-[#ccc] 
                            min-[1078px]:px-[2.5rem] border-black border-r-[1px] hover:text-white">
                            Library
                        </div>
                    </NavLink>
                </div>

                <div className="w-[15rem] relative min-[1200px]:w-[25rem] px-[0.7rem]">
                    <input type="search" placeholder="Search"
                        className="w-full rounded-[4px] py-[5px] px-[10px] text-black
                            bg-[#f2f2f2]"/>
                    <img src="https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg" 
                        className="absolute top-[9px] right-[20px] bg-[#f2f2f2]"/>
                </div>

                {isAuthenticated ? <button className="text-[#f50] mx-[0.5rem]">Try Next Pro</button>
                    :
                    <button className="border-[#666] border-[1px] rounded-[4px] px-[10px] pt-[2px] pb-[3px] 
                        mx-[0.5rem]" onClick={() => {set_loginform_state(true)}}>
                        Sign in
                    </button>
                }

                {
                    isAuthenticated ?
                    <NavLink to={'/'} className="mx-[0.5rem] text-[#ccc] hover:text-white">For Artists</NavLink>
                    :
                    <button className="bg-[#f50] rounded-[3px] px-[10px] pt-[2px] pb-[4px] mx-[0.5rem]"
                        onClick={() => {set_signupform_state(true)}}>
                        Create account
                    </button>
                }
                

                <NavLink to={'/'} className="text-[#ccc] px-[0.7rem] hover:text-[#f50] cursor-pointer">
                    Upload
                </NavLink>

                {
                    isAuthenticated &&
                    <div className="flex items-center h-full">
                        <div className={`relative flex items-center px-[5px] cursor-pointer 
                            ${showProfileModal && 'bg-[#111]'} h-full`}
                            onClick={(e) => {openTheModal(e, setShowProfileModal)
                                                closeTheModal(e, setShowAboutUsModal)}}>
                            <button className="relative rounded-full w-[2rem] h-[2rem] mx-[0.5rem] text-[25px]
                                 text-white bg-gradient-to-r from-[#846170] to-[#70929c]
                                 flex items-center justify-center pr-[1px] pb-[5px]">
                                {firstLetterOfUsername}
                            </button>

                            <div className="mr-[0.5rem]">
                               <ChevronDownLogo width={'13px'} height={'13px'} color={'#ccc'} /> 
                            </div>
                        </div>

                        {
                            showProfileModal && 
                                <ProfileModal />
                        }

                        <div className="cursor-pointer">
                            <NotificationLogo color={"#c2c2c2"} mx={"0.5rem"} />
                        </div>               
                        
                        <div className="cursor-pointer">
                            <MessageLogo color={"#c2c2c2"} mx={"0.8rem"} />
                        </div>
                        
                    </div>
                    
                }


                <div className={`relative px-[0.8rem] opacity-60 hover:opacity-100 cursor-pointer
                    ${showAboutUsModal && 'bg-[#111]'} h-full`}
                    onClick={(event) => {openTheModal(event, setShowAboutUsModal)
                                        closeTheModal(event, setShowProfileModal)}}>
                    <MoreButtonLogo width={"30px"} height={"48px"} color={"#ffffff"} />
                    
                    {
                        showAboutUsModal &&
                            <AboutUsModal />
                    }
                </div>
            </nav>

        </div>
        
    )
}

export default NavbarForDesktop;