import { useContext, useState } from "react";
import { MusicContext } from "../../Contexts/musicContext";
import Filled_eye from "../../components/Logos_and_icons/filledEye";
import Filled_slashed_eye from "../../components/Logos_and_icons/filledSlashedEye";
import { useNavigate, useLocation } from "react-router";
import { UserContext } from "../../Contexts/authenticationContext";



function SignUp_form() {
    const {save_user_and_token, set_signupform_state, setAuthenticated, isAuthenticated}= useContext(UserContext);

    const {projectId}= useContext(MusicContext);

    const isMobileView= window.innerWidth < 1024;

    const navigate= useNavigate();
    const location= useLocation();

    const [isPasswordHidden, set_hiddenness_of_password]= useState(true);
    const [errorState, set_error_state]= useState("");

    const [userInfo, set_user_info]= useState({
        name: '',
        email: '',
        password: '',
        appType: 'music',
    });

    function handle_change(event) {
        const element= event.target;

        const {name, value}= element;

        set_user_info((old_info) => {
            return {
                ...old_info,
                [name]: value,
            };
        });
    }
 
    function handle_submit(event) {
        event.preventDefault();

        if(!userInfo.email || !userInfo.password || !userInfo.name) {
            set_error_state('*All fields must be filled');
            return;
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)) {
            set_error_state("*Format of email is not correct");
            return;
        }
        
        sign_up(userInfo);
    }

    async function sign_up(userInfo) {
        try {
            var myHeaders = new Headers();
            myHeaders.append("projectId", {projectId});
            myHeaders.append("Content-Type", "application/json");
        
            const url = "https://academics.newtonschool.co/api/v1/user/signup";
            var payload = {
                ...userInfo,
            };
        
            var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: JSON.stringify(payload),
                redirect: "follow",
            };
        
            const response = await fetch(url, requestOptions);
            
            if (response.ok) {
                const data = await response.json();
                
                const { token, data: loginData } = data;
                localStorage.setItem("authToken", token);
                localStorage.setItem("userInfo", loginData);
                save_user_and_token(loginData, token);

                setAuthenticated(true);
                set_signupform_state();
                navigate("/discover");
            } else {
                set_error_state("Password or email is incorrect");
            }
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <div className={`bg-white h-[80vh]`}>
            {!isMobileView && <div className="bg-white h-[100vh] opacity-50"></div> }
            <div className={`fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] flex flex-col items-center 
                ${isMobileView && "pb-[4rem]"}`}
                style={{width: isMobileView && "101%", height: isMobileView && "100%"}}
                id={isMobileView ? 'bg-for-mobile': 'bg-for-desktop'}>
                <div className="w-full flex justify-end mr-[3rem] mt-[2rem] mb-[-1rem] cursor-pointer font-bold z-20"
                    onClick={() => {set_signupform_state(false);
                                    navigate(location.pathname == '/' ? '/' : '/discover')}}>X</div>

                <div className="relative w-[450px] px-[1.5rem] pt-[0.5rem] pb-[3rem] flex flex-col justify-center items-center  
                text-[16px]" style={{width: isMobileView && "100%", height: isMobileView && "65%", padding: isMobileView && '0 1rem'}}>
                    <div className="py-[1rem] w-full flex flex-col items-center">

                        {/* <p className={`${isMobileView ? ("text-white mt-[12rem]") : "text-black"} text-[45px] pb-[1rem]`}>Sign Up</p> */}

                        <button className="w-full bg-[#3578e5] flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed">
                            <img className="w-[16px] mr-[8px]"
                                src="https://secure.sndcdn.com/assets/facebook-8d9809.png" alt="facebook" />
                            <div className="text-white">
                                Continue with Facebook
                            </div>
                        </button>
                    
                        <button className="w-full flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed" id={isMobileView ? 'google-tab-for-mobile' : 'google-tab-for-desktop'}>
                            <img className="w-[15px] mr-[8px] mt-[0.5px]"
                                 src="https://secure.sndcdn.com/assets/google-a6c367.svg" alt="google" />
                            <div>
                                Continue with Google
                            </div>
                        </button>
                    
                        <button className="w-full flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed" id={isMobileView ? 'apple-tab-for-mobile' : 'apple-tab-for-desktop'}>
                            <img className="w-[25px] mr-[4px] mt-[1px]"
                                 src="https://secure.sndcdn.com/assets/apple-0a88d2.svg" alt="facebook" />
                            <div className="text-white">
                                Continue with Apple
                            </div>
                        </button>   
                    </div>
    
                    <div className="flex w-full">
                        <div className="w-2/4 mt-[13px]" id={isMobileView ? 'line-for-mobile' : 'line-for-desktop'}></div>
                        <span className="px-[1rem] font-semibold">or</span>
                        <div className="w-2/4 mt-[13px]" id={isMobileView ? 'line-for-mobile' : 'line-for-desktop'}></div>
                    </div>

                    <form className="flex flex-col w-full mt-[1rem] text-[black]" onSubmit={(event) => handle_submit(event)}>
                        <input type="name" placeholder="What should we call you?" name="name" inputMode="text" required
                                className="w-full border-[1px] border-[#ccc] my-[0.5rem] rounded-[4px] px-[8px] pt-[6px] pb-[8px]
                                    text-[17px]" onChange={(event) => handle_change(event)}/>

                        <input type="email" placeholder="Your email address" name="email" inputMode="email" required
                            className="w-full border-[1px] border-[#ccc] my-[0.5rem] rounded-[4px] px-[8px] pt-[6px] pb-[8px]
                                text-[18px]" onChange={(event) => handle_change(event)}/>
        
                        <div className="relative">
                            <input type={isPasswordHidden ? "password" : "text"} placeholder="Enter password" name="password" 
                                inputMode='text' required className="w-full border-[1px] border-[#ccc] my-[0.5rem] 
                                rounded-[4px] pl-[8px] pt-[6px] pb-[8px] pr-[50px] text-[18px]" 
                                onChange={(event) => handle_change(event)}/>
                                <div className="absolute right-[13px] top-[17px]">
                                    {
                                        isPasswordHidden ? <div onClick= {() => set_hiddenness_of_password(false)}>
                                                <Filled_eye width= {"25px"} height={"25px"}  />
                                            </div> 
                                            : 
                                            <div onClick= {() => set_hiddenness_of_password(true)}>
                                                <Filled_slashed_eye width= {"25px"} height={"25px"} />
                                            </div>
                                    }
                                </div>
                        </div>
                        
                        {
                            errorState && <div className="text-[#ff0000] ">{errorState}</div>
                        }

                        <input type="submit" 
                            className="w-full my-[0.5rem] rounded-[3px] py-[7px] cursor-pointer"
                            id={isMobileView ? 'submit-button-for-mobile' : 'submit-button-for-desktop'}/>
                    </form>

                    <div className="mt-[0.5rem]">
                        <a className="absolute right-[17px] text-[12px] w-[4rem] font-semibold" 
                            id={isMobileView ? 'anchor-tag-for-mobile' : 'anchor-tag-for-desktop'}
                            href="#">Need help?</a>
                    </div>

                    <p className="mt-[1.5rem] leading-[15px]">
                        <span className="text-[12px] text-[#999]">
                            When registering, you agree that we may use your provided data for the registration and to send you 
                            notifications on our products and services. 
                            You can unsubscribe from notifications at any time in your settings. 
                            For additional info please refer to our  
                            <a className=" font-semibold" id={isMobileView ? 'anchor-tag-for-mobile' : 'anchor-tag-for-desktop'} 
                            href="https://soundcloud.com/pages/privacy" target="blank"> Privacy Policy</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignUp_form;