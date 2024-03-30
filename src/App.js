import './App.css';
import MobileComponent from './Pages/Mobile/Home_page/mobileComponent';
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Signin_form from './Pages/Authentication/singin_form';
import SignUp_form from './Pages/Authentication/signup_form';
import SongPageForDesktop from './components/Desktop/songPageForDesktop';
import { useContext, useState } from 'react';
import { useEffect } from 'react';
import AudioPlayerForDektop from './components/Desktop/Music_player/audioPlayerForDektop';
import { UserContext } from './Contexts/authenticationContext';
import HomePageBeforeLogin from './Pages/Desktop/Home_page_before_login/homePageBeforeLogin';
import ProfilePageForDesktop from './Pages/Desktop/Profile_page/profilePageForDesktop';
import DiscoverPageForDesktop from './Pages/Desktop/discoverPageForDesktop';
import FeedPageForDesktop from './Pages/Desktop/feedPageForDesktop';
import LoginPage from './Pages/Authentication/loginPage';
import PopularTracksSection from './Pages/Desktop/Profile_page/popularTracksSection';
import TracksSection from './Pages/Desktop/Profile_page/tracksSection';
import AlbumsSection from './Pages/Desktop/Profile_page/albumsSection';
import PlaylistSection from './Pages/Desktop/Profile_page/playlistSection';
import RepostSection from './Pages/Desktop/Profile_page/repostSection';
import { MusicContext } from './Contexts/musicContext';
import { getListFromLocal } from './Utils/localStorageFunctions';
import AllSection from './Pages/Desktop/Profile_page/allSection';
import LibraryPageForDesktop from './Pages/Desktop/Library_page/libraryPageForDesktop';
import OverviewForLibraryPage from './Pages/Desktop/Library_page/overviewForLibraryPage';
import LikesForLibraryPage from './Pages/Desktop/Library_page/likesForLibraryPage';
import PlaylistsForLibraryPage from './Pages/Desktop/Library_page/playlistsForLibraryPage';
import AlbumsForLibraryPage from './Pages/Desktop/Library_page/albumsForLibraryPage';
import StationsForLibraryPage from './Pages/Desktop/Library_page/stationsForLibraryPage';
import FollowingForLibraryPage from './Pages/Desktop/Library_page/followingForLibraryPage';
import HistoryForLibraryPage from './Pages/Desktop/Library_page/historyForLibraryPage';
import AlbumPageForDesktop from './components/Desktop/albumPageForDesktop';
import { getFavouritesList } from './Utils/fetchFunctions';
import { AudioContext } from './Contexts/audioContext';

function App() {
  
  const [isMobile, setIsMobile]= useState(false);


  const {setFavourites, setFavArtists, projectId}= useContext(MusicContext);
  const {isActive}= useContext(AudioContext);
  const {save_user_and_token, showLogInForm, showSignUpForm, isAuthenticated, setAuthenticated}= useContext(UserContext);

  const navigate= useNavigate();

  let authToken;

  function setList(data) {
    setFavourites(data);
  }

  // to get user info from local storage
  
  useEffect(() => {
    authToken= localStorage.getItem("authToken");
    if(authToken) {
    const user= localStorage.getItem("userInfo");
    const parsedUser= JSON.parse(user);

      save_user_and_token(parsedUser, authToken);
      setAuthenticated(true);
      navigate("/discover");
    }

    getFavouritesList()

  }, [])

  useEffect(() => {
    if(authToken) {
      const favArtists= getListFromLocal("favArtists");
      const trimedArr= favArtists.filter(item => item != null);
      setFavArtists(trimedArr);

      getFavouritesList(authToken, projectId, setList);
      
    }
  }, [authToken])

  useEffect(() => {

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  
  return (
    <div className='relative'>
    {
      // screenWidth < "1024px" ? 
      isMobile ?
      (
        <MobileComponent />
      ) 
        :
      (
        <>
          <Routes>
            <Route path="/" element={<HomePageBeforeLogin />} />
            <Route path='/discover' element={<DiscoverPageForDesktop />} />
            <Route path='/feed' element={<FeedPageForDesktop />} >
              <Route path=":songId" element={<SongPageForDesktop />} />
            </Route>
            <Route path='/signin' element={<LoginPage />} />
            
            <Route path='/song/:songId' element={<SongPageForDesktop />} />
            <Route path='/artist/:artistName' element={<SongPageForDesktop />} />

            <Route path='/sets/:artistName/:albumId' element={<AlbumPageForDesktop />} />

            <Route path="/you" element={<LibraryPageForDesktop />}>
              <Route path="library" element={<OverviewForLibraryPage />} />
              <Route path="likes" element={<LikesForLibraryPage />} />
              <Route path="sets" element={<PlaylistsForLibraryPage />} />
              <Route path="albums" element={<AlbumsForLibraryPage />} />
              <Route path="stations" element={<StationsForLibraryPage />} />
              <Route path="following" element={<FollowingForLibraryPage />} />
              <Route path="history" element={<HistoryForLibraryPage />} />
            </Route>

            <Route path="/user/:username" element={<ProfilePageForDesktop />}>
              <Route path="all" element={<AllSection />} />  
              <Route path="popular-tracks" element={<PopularTracksSection />} />
              <Route path="tracks" element={<TracksSection />} />
              <Route path="albums" element={<AlbumsSection />} />
              <Route path="sets" element={<PlaylistSection />} />
              <Route path="reposts" element={<RepostSection />} />
            </Route>

            <Route path="*" element={isAuthenticated ? <DiscoverPageForDesktop /> : <HomePageBeforeLogin />} />
          </Routes>

          {
            
            (isActive) && <AudioPlayerForDektop />
          }
        </>
      )   
    }  

      {showLogInForm && <Signin_form />}
      {showSignUpForm && <SignUp_form />}
      
      <Outlet />
    </div>
  );
}

export default App;

