import { useContext } from "react";
import HomePage from "./homepage";
import DiscoverPageForMobile from "../Navbar/discoverPageForMobile";
import SongPageForMobile from "../../../components/Mobile/songPageForMobile";
import FeedPageForMobile from "../Navbar/feedPageForMobile";
import SearchPageForMobile from "../Navbar/searchPageForMobile";
import LibraryPageForMobile from "../Navbar/librabyPageForMobile";
import DownloadPageForMobile from "../Navbar/downloadPageForMobile";
import { Route, Routes } from "react-router-dom";
import HeaderForMobile from "./headerForMobile";
import NavbarForMobile from "../Navbar/navbarForMobile";
import { UserContext } from "../../../Contexts/authenticationContext";
import LikedSongs from "../Library_page/likedSongs";

import Following from "../Library_page/following";

function MobileComponent() {
    const {showLogInForm, showSignUpForm, isAuthenticated}= useContext(UserContext);
    return (
        
        <div style={{ position: (showLogInForm || showSignUpForm)  ? 'fixed' : 'relative', 
                        filter: (showLogInForm || showSignUpForm)  && "grayScale(80%)", 
                        pointerEvents: (showLogInForm || showSignUpForm)  && 'none', backgroundColor: 'black', marginBottom: "3rem"}}>
                            
            <HeaderForMobile />

                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path='/discover' element={<DiscoverPageForMobile />}>
                    </Route>
                    <Route path='/feed' element={<FeedPageForMobile />} />
                    <Route path='/search' element={<SearchPageForMobile />} />
                    <Route path='/you' element={<LibraryPageForMobile />} />

                    <Route path='/you/likes' element={<LikedSongs />} />
                    <Route path='/you/following' element={<Following />} />
                    
                    <Route path='/download' element={<DownloadPageForMobile />} />
                    <Route path='/song/:songId' element={<SongPageForMobile />} />
                    <Route path="*" element={isAuthenticated ? <DiscoverPageForMobile /> : <HomePage />} />
                </Routes>
            <NavbarForMobile/>
             
        </div>
    )
}

export default MobileComponent;