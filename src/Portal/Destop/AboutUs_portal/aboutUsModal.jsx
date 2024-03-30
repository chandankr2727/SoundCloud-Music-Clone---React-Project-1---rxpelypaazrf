import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../Contexts/authenticationContext";




export default function AboutUsModal() {

    const {user, token, save_user_and_token, isAuthenticated, setAuthenticated}= useContext(UserContext);

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

    

    const options= [["About us", "Legal", "Copyrights"], ["Mobile apps", "For Creators", "Blog", "Jobs", "Developers"], 
                    ["Support", "Keyboard Shortcuts"], ["Subscription", "Settings"]];

    let i=0;

    

    return (
        <div id="aboutUsModal" className="absolute top-[3rem] right-0 bg-white border border-[#f2f2f2] w-[13rem] 
            z-20 shadow-[-2px_2px_4px_rgba(0,0,0,0.25)] text-[#333] font-bold text-[12px]">
            {
                options.map((arr) => {
                    if(i > 2) {
                        return;
                    } else {
                        return (<div key={i++} className="w-full border-t border-[#f2f2f2] 
                            shadow-[0px_0px_2px_rgba(0,0,0,0.25)]">
                            {
                                arr.map((item) => {
                                    return (
                                        <Link to={'/'} key={item}>
                                            <div className="p-[10px] cursor-pointer hover:bg-[#f2f2f2]">{item}</div>
                                        </Link>  
                                )})
                            }
                            </div>
                        )
                    }
                   })
            }
            {
                isAuthenticated &&
                <div onClick={(e) => setState(e)} className="w-full p-[10px] cursor-pointer hover:bg-[#f2f2f2]">
                    Sign out
                </div>
            }
            
        </div>
    )
}