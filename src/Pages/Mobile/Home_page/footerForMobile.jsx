import { useContext } from "react";
import { MusicContext } from "../../../Contexts/musicContext";
import { UserContext } from "../../../Contexts/authenticationContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";



function FooterForMobile() {

    const {anchor_tags}= useContext(MusicContext);
    const {isAuthenticated, save_user_and_token, setAuthenticated}= useContext(UserContext);

    const date= new Date();
    const year= date.getFullYear();

    const [isClicked, setIsClicked]= useState(false);
    const navigate= useNavigate();

    function setState(e) {
        e.stopPropagation();
        setIsClicked(!isClicked);
    }

    useEffect(() => {
        if(isClicked) {
            localStorage.removeItem("authToken");

            localStorage.removeItem("userInfo");
            save_user_and_token(null, null);
            setAuthenticated(false);
            navigate("/");
        }
        
    }, [isClicked])
    return (
        <div className="mx-[15px] mt-[2rem]">
            <p className="text-white text-[28px] font-semibold leading-[1.25]">Enjoy the full SoundCloud experience in the app</p>

            <a href="#" className="">
                <img className="h-[42px] mt-[1rem]" 
                    src="https://m.sndcdn.com/_next/static/images/English-2c0ad42774f0308a9762d7184607bb73.png" />
            </a>

            <div className="text-white my-[2rem]">
                <ul>
                    {
                        anchor_tags.map((anchorTag) => {
                            const {tag, url}= anchorTag;

                            return(
                                <li key={url} className="py-[8px] font-normal text-[15px]"><a href={url} className="">{tag}</a></li>
                            )
                        })
                    }
                    {
                        isAuthenticated &&
                        <li key={"sign out"} className="py-[8px] font-normal text-[15px]"  onClick={(e) => setState(e)}>
                            Sign out
                        </li>
                    }
                </ul>
            </div>

            <div className="text-white flex flex-row no-wrap w-[12rem] h-[3rem] mt-[15px]">
                <svg className="">
                    <g><path d="M8.62945 16.0244C8.62945 11.9469 11.9468 8.62957 16.0243 8.62957C20.1019 8.62957 23.4192 11.9469 23.4192 16.0244C23.4192 20.1019 20.1019 23.4193 16.0243 23.4193C11.9468 23.4193 8.62945 20.1019 8.62945 16.0244ZM11.5058 16.0244C11.5058 18.52 13.5288 20.543 16.0243 20.543C18.5198 20.543 20.5429 18.5199 20.5429 16.0244C20.5429 13.5289 18.5199 11.5059 16.0243 11.5059C13.5288 11.5059 11.5058 13.5289 11.5058 16.0244Z" fill="currentColor"></path><path d="M23 10.0001C23.5523 10.0001 24 9.55241 24 9.00012C24 8.44784 23.5523 8.00012 23 8.00012C22.4477 8.00012 22 8.44784 22 9.00012C22 9.55241 22.4477 10.0001 23 10.0001Z" fill="currentColor"></path><path d="M10.2461 1.72852H21.8026C26.4992 1.72852 30.3202 5.54952 30.3202 10.2462V21.8027C30.3202 26.4994 26.4992 30.3204 21.8026 30.3204H10.2461C5.5494 30.3204 1.72839 26.4994 1.72839 21.8027V10.2462C1.72839 5.54952 5.5494 1.72852 10.2461 1.72852ZM21.8026 27.444C24.9182 27.444 27.4439 24.9183 27.4439 21.8027V10.2462C27.4439 7.13054 24.9182 4.60485 21.8026 4.60485H10.2461C7.13047 4.60485 4.6085 7.13054 4.6085 10.2462V21.8027C4.6085 24.9183 7.13047 27.444 10.2461 27.444H21.8026Z" fill="currentColor"></path></g>
                </svg>
                
                <svg className="">
                    <path fill="currentColor" d="M30 16.0856C30 8.30633 23.732 2 16 2C8.26801 2 2 8.30633 2 16.0856C2 23.1161 7.1196 28.9434 13.8125 30V20.1572H10.2578V16.0856H13.8125V12.9824C13.8125 9.45216 15.9026 7.50219 19.1005 7.50219C20.6322 7.50219 22.2344 7.7773 22.2344 7.7773V11.2437H20.469C18.7299 11.2437 18.1875 12.3294 18.1875 13.4434V16.0856H22.0703L21.4496 20.1572H18.1875V30C24.8804 28.9434 30 23.1161 30 16.0856Z"></path>
                </svg>

                <svg className="">
                    <path fill="currentColor" d="M30.4451 5.42778C29.2892 6.10833 28.007 6.59444 26.6441 6.85694C25.5543 5.71944 23.9989 5 22.2773 5C18.974 5 16.2948 7.63472 16.2948 10.8917C16.2948 11.3486 16.3473 11.8056 16.4484 12.2333C11.476 11.9903 7.06646 9.6375 4.11508 6.07917C3.60083 6.94444 3.30433 7.95556 3.30433 9.04444C3.30433 11.0861 4.36298 12.8847 5.96796 13.9444C4.98805 13.9153 4.06453 13.6431 3.25767 13.2056V13.2833C3.25767 16.1319 5.32052 18.5139 8.05802 19.0583C7.55446 19.1944 7.0266 19.2625 6.48027 19.2625C6.09433 19.2625 5.72104 19.2236 5.35454 19.1556C6.11766 21.4986 8.32536 23.2 10.9443 23.2486C8.89502 24.8236 6.31695 25.7667 3.5114 25.7667C3.02728 25.7667 2.55288 25.7375 2.08334 25.6889C4.73336 27.3611 7.87915 28.3333 11.2573 28.3333C22.2637 28.3333 28.2811 19.3597 28.2811 11.5722C28.2811 11.3194 28.2773 11.0667 28.2656 10.8139C29.4331 9.97778 30.449 8.94722 31.25 7.76111C30.1778 8.22778 29.0248 8.54861 27.8135 8.68472C29.0501 7.96528 29.9969 6.80833 30.4451 5.42778Z"></path>
                </svg>
            </div>

            <div className="text-[#999] pb-[5.5rem]">
                <p className="text-[14px]">
                    &#169; <span>{year} SoundCloud</span>
                </p>
                <p className="mt-[8px]">
                    Language: <span className="text-white font-semibold text-[14px]">English (US)</span>
                </p>
            </div>
        </div>
    )
}

export default FooterForMobile;