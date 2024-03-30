import { useContext } from "react";
import HeaderSection from "./headerSection";
import SearchSection from "./searchSection";
import TrendingSongs from "./freeTrendingCollectionSection";
import FooterForDesktop from "../FooterForDesktop";
import { UserContext } from "../../../Contexts/authenticationContext";


function HomePageBeforeLogin() {
    const {showLogInForm, showSignUpForm, set_signupform_state, set_loginform_state}= useContext(UserContext);



    return (
        <div style={(showLogInForm || showSignUpForm) ? {position: 'fixed', pointerEvents: 'none', filter: "grayScale(80%)"} : {position: 'relative'}}>
            <div className="mx-[35px] border-t-4 border-t-[#f50] bg-white min-[1150px]:mx-[70px]">
                <HeaderSection />
                <SearchSection />
                <TrendingSongs/>

                <div className="bg-[#0000000d] pt-[4rem]" id="banner-1">
                    <div className="flex mx-[4rem]">
                        <div>
                            <img src="https://a-v2.sndcdn.com/assets/images/never_stop_listening@1x-9c5264ff.jpg" 
                                className="bg-cover"/>
                        </div>

                        <div className="flex flex-col justify-center ml-[3rem] w-[23rem]">
                            <p className="text-[36px] leading-[1.2] pb-4">
                                Never stop listening
                            </p>

                            <p className="text-[24px] py-4">
                                SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and Xbox One.
                            </p>

                            <div className="flex flex-row mt-[28px] mb-[4rem]">
                                <a href="https://itunes.apple.com/us/app/soundcloud/id336353151?mt=8"
                                    className="w-[120px]">
                                    <img src="https://a-v2.sndcdn.com/assets/images/appstore_badge@en_2x-5a6e21e0.png"/>
                                </a>

                                <a href="https://play.google.com/store/apps/details?id=com.soundcloud.android&hl=us"
                                    className="w-[145px] pl-[10px]">
                                    <img src="https://a-v2.sndcdn.com/assets/images/google_play_badge@en_2x-ad41a4d7.png"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[url('https://a-v2.sndcdn.com/assets/images/hp_creator_image_featured_artists@2x-3007d170.jpg')]
                    bg-cover bg-[100%] bg-no-repeat py-[4rem] px-[2rem] min-[1024px]:px-[4.5rem]">
                        <div className="text-white b-black">
                            <p className="text-[36px] mb-[7px]">Calling all creators</p>
                            <p className="w-[32rem] text-[24px] mb-[2rem]">
                                Get on SoundCloud to connect with fans, share your sounds, and grow your audience. 
                                What are you waiting for?
                            </p>
                            <div>
                                <a href="https://creators.soundcloud.com" className="text-[18px] border boder-white px-6 py-3 rounded-[4px]"
                                    >Find out more</a>
                            </div>
                        </div>
                </div>

                <div className="flex flex-col justify-center items-center py-[3rem]">
                    <p className="text-[36px]">
                        Thanks for listening. Now join in.
                    </p>
                    <p className="text-[26px] my-[10px]">
                        Save tracks, follow artists and build playlists. All for free.
                    </p>
                    <div>
                        <button className="text-[18px] my-[10px] bg-[#f50] text-white px-10 py-2 rounded-[4px]"
                            onClick={() => {set_signupform_state(true)}}>
                            Create account</button>
                    </div>

                    <p className="text-[12px] py-[10px]">
                        Already have an account? 
                        <button className="text-[16px] border border-[#e5e5e5] bg-white text-black rounded-[4px] px-4 py-2 ml-[15px]
                            hover:text-[white] hover:bg-[#f50]"
                            onClick={() => {set_loginform_state(true)}}>
                            Sign in
                        </button>
                    </p>
                </div>

                <div className="p-[2rem]">
                    {
                        <FooterForDesktop />
                    }
                </div>
            </div>

        </div>
       
    )
}

export default HomePageBeforeLogin;