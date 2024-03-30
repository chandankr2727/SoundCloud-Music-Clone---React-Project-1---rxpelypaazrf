import { useContext, useState } from "react";
import Filled_eye from "../../components/Logos_and_icons/filledEye";
import Filled_slashed_eye from "../../components/Logos_and_icons/filledSlashedEye";
import { useNavigate, useLocation } from "react-router";
import { UserContext } from "../../Contexts/authenticationContext";
import { MusicContext } from "../../Contexts/musicContext";


function Signin_form() {
    const {set_loginform_state, save_user_and_token, setAuthenticated, showLogInForm
    }= useContext(UserContext);

    const {projectId}= useContext(MusicContext);
    
    const isMobile= window.innerWidth < 1024;
    const navigate= useNavigate();
    const location= useLocation();
    
    const [isPasswordHidden, set_hiddenness_of_password]= useState(true);
    const [errorState, set_error_state]= useState("");

    const [userInfo, set_user_info]= useState({
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

        if(!userInfo.email || !userInfo.password) {
            set_error_state('*Please enter email and password');
            return;
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userInfo.email)) {
            set_error_state("*Format of email is not correct");
            return;
        }
        
        sign_in(userInfo);
    }

    async function sign_in(userInfo) {
        try {
            var myHeaders = new Headers();
            myHeaders.append("projectId", {projectId});
            myHeaders.append("Content-Type", "application/json");
        
            const url = "https://academics.newtonschool.co/api/v1/user/login";
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
                localStorage.setItem("userInfo", JSON.stringify(loginData));
                save_user_and_token(loginData, token);

                setAuthenticated(true);
                set_loginform_state();

                navigate("/discover");
            } else {
                set_error_state("Password or email is incorrect");
            }
        } catch (error) {
          console.log(error);
        }
    }

    return (
        <div className="bg-white h-[80vh]">
            { !isMobile && <div className="bg-white h-[100vh] opacity-50"></div> }
            <div className="fixed top-2/4 left-2/4 translate-x-[-50%] translate-y-[-50%] 
                flex flex-col items-center shadow-2xl"
                style={{width: isMobile && "101%", height: isMobile && "100%"}}
                id={isMobile ? 'bg-for-mobile': 'bg-for-desktop'}>
                    
                <div className={`w-full flex justify-end mr-[3rem] mt-[1rem] cursor-pointer font-bold z-20`}
                    onClick={() => {set_loginform_state(false);
                                    navigate(location.pathname == '/' ? '/' : '/discover')}}>
                        X
                </div>
                

                <div className="relative w-[450px] px-[1.5rem] pt-[0.5rem] pb-[1rem] flex flex-col justify-center items-center  text-[16px]"
                    style={{width: isMobile && "100%", height: isMobile && "65%", padding: isMobile && '0 1rem'}}>
                    <div className="py-[1rem] w-full flex flex-col items-center">

                        {/* <p className={`${isMobile ? "text-white" : "text-black"} ${isMobile ? "mt-[8rem]" : "mt-[1rem]"}
                            text-[45px] pb-[1rem]`}>Sign In</p> */}

                        <button className="w-full bg-[#3578e5] flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed">
                            <img className="w-[16px] mr-[8px]"
                                src="https://secure.sndcdn.com/assets/facebook-8d9809.png" alt="facebook" />
                            <div className="text-white">
                                Continue with Facebook
                            </div>
                        </button>
                    
                        <button className="w-full flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed" id={isMobile ? 'google-tab-for-mobile' : 'google-tab-for-desktop'}>
                            <img className="w-[15px] mr-[8px] mt-[0.5px]"
                                 src="https://secure.sndcdn.com/assets/google-a6c367.svg" alt="google" />
                            <div>
                                Continue with Google
                            </div>
                        </button>
                    
                        <button className="w-full flex flex-row justify-center items-center py-[8px] rounded-[3px]
                            my-[0.5rem] cursor-not-allowed" id={isMobile ? 'apple-tab-for-mobile' : 'apple-tab-for-desktop'}>
                            <img className="w-[25px] mr-[4px] mt-[1px]"
                                 src="https://secure.sndcdn.com/assets/apple-0a88d2.svg" alt="facebook" />
                            <div className="text-white">
                                Continue with Apple
                            </div>
                        </button>   
                    </div>
    
                    <div className="flex w-full">
                        <div className="w-2/4 mt-[13px]" id={isMobile ? 'line-for-mobile' : 'line-for-desktop'}></div>
                        <span className="px-[1rem] font-semibold">or</span>
                        <div className="w-2/4 mt-[13px]" id={isMobile ? 'line-for-mobile' : 'line-for-desktop'}></div>
                    </div>

                    <form className="flex flex-col w-full mt-[1rem] text-[black]" onSubmit={(event) => handle_submit(event)}>
                        <input type="email" placeholder="Your email address" name="email" inputMode="email"
                            className="w-full border-[1px] border-[#ccc] my-[0.5rem] rounded-[4px] px-[8px] pt-[6px] pb-[8px]
                                text-[18px]" onChange={(event) => handle_change(event)}/>
        
                        <div className="relative">
                            <input type={isPasswordHidden ? "password" : "text"} placeholder="Enter password" name="password" inputMode='text'
                            className="w-full border-[1px] border-[#ccc] my-[0.5rem] rounded-[4px] pl-[8px] pt-[6px] pb-[8px] pr-[50px]
                                text-[18px]" onChange={(event) => handle_change(event)}/>
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
                            id={isMobile ? 'submit-button-for-mobile' : 'submit-button-for-desktop'}/>
                    </form>

                    <div className="mt-[0.5rem]">
                        <a className="absolute right-[17px] text-[12px] w-[4rem] font-semibold" 
                            id={isMobile ? 'anchor-tag-for-mobile' : 'anchor-tag-for-desktop'}
                            href="#">Need help?</a>
                    </div>

                    <p className="mt-[1.5rem] leading-[15px]">
                        <span className="text-[12px] text-[#999]">
                            When registering, you agree that we may use your provided data for the registration and to send you 
                            notifications on our products and services. 
                            You can unsubscribe from notifications at any time in your settings. 
                            For additional info please refer to our  
                            <a className=" font-semibold" id={isMobile ? 'anchor-tag-for-mobile' : 'anchor-tag-for-desktop'} 
                            href="https://soundcloud.com/pages/privacy" target="blank"> Privacy Policy</a>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signin_form;