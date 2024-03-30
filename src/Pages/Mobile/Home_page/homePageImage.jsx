import { useContext } from "react";
import { UserContext } from "../../../Contexts/authenticationContext";



function HomePageImage() {

    const {set_signupform_state}= useContext(UserContext);

    return (
        <div> 

            <div className="bg-[url('https://m.sndcdn.com/_next/static/images/home-page-featured-artists-hero-image-b56192255a09291e39b03a20aa0a0f04.jpg')]
                h-[98vw] bg-contain bg-no-repeat relative">

                <div className="absolute bottom-0 flex flex-col w-full px-[16px] pb-[20px] box-border">
                    <p className="text-white text-[25px] font-semibold leading-[1.25] min-[320px]:text-[34px]">
                        What's next in music is first on SoundCloud
                    </p>
                    <button className="flex justify-center items-center bg-white py-[10px] rounded-[4px] 
                        mt-[15px] mb-[20px] font-semibold min-[320px]:py-[12px]"
                        onClick={() => {set_signupform_state(true)}}
                            >Create a free account</button>
                </div>
            </div>

            
        </div>
    )
}

export default HomePageImage;