import { useContext, useState } from "react";
import { MusicContext } from "../../Contexts/musicContext";
import Play_button_small from "../Logos_and_icons/playButton_small";
import Filled_heart from "../Logos_and_icons/filledHeart";
import Repost from "../Logos_and_icons/repost";
import Playlist from "../Logos_and_icons/playlist";
import { useParams } from "react-router";
import Signin_form from "../../Pages/Authentication/singin_form";
import SignUp_form from "../../Pages/Authentication/signup_form";
import FooterForDesktop from "../../Pages/Desktop/FooterForDesktop";
import NavbarForDesktop from "../../Pages/Desktop/navbarForDesktop";
import { UserContext } from "../../Contexts/authenticationContext";
import ActionMenu from "./actionMenu";
import { useFetchAlbums } from "../../Custom_hooks/useFetchAlbums";
import ArtistSection from "./Song_page_components/artistSection";
import LikeSection from "./Song_page_components/likeSection";
import PlaylistSection from "./Song_page_components/playlistSection";
import useFetchSingleAlbum from "../../Custom_hooks/useFetchSingleAlbum";
import HeaderForAlbumPage from "./Album_page_components/headerForAlbumPageForDesktop";
import RenderSongPageForAlbum from "./Album_page_components/renderSongListForAlbum";



export default function AlbumPageForDesktop() {
        
    const {commentators, myRandom, urlObject, years}= useContext(MusicContext);

    const {isAuthenticated, showLogInForm, showSignUpForm, set_loginform_state, set_signupform_state,
        firstLetterOfUsername}= useContext(UserContext);

    const {albumId}= useParams();
    
    const [likes, setLikes]= useState(myRandom(500) + "k");
    const [reposted, setReposted]= useState(myRandom(50));
    const [played, setPlayed]= useState(myRandom(5000));
    
    const [album, loader1, error1]= useFetchSingleAlbum(urlObject.singleAlbumUrl + albumId);
    const [listOfAlbums, loader2, error2]= useFetchAlbums(urlObject.albumsUrl + "?limit= 12");


    const year= album?.release?.slice(0, 4);
    const month= album?.release?.slice(5,7);
    const date= album?.release?.slice(8,10);

    // useEffect(() => {
    //     // console.log(typeof song.songId);
    //     // localStorage.setItem("currSong", song.songId);
    //     setCurrentSong(album?.songs?.[0]);
    // }, [song, albumId])
    
    // common function to render related and album songs container
    function render_aside_section(Component, title, number) {
        return (

            <div className="flex flex-nowrap justify-between text-[#999] py-[10px] border-b-[1px] border-[#999]">
                <div className="flex items-center">
                    <Component />
                    {
                        number && <div className="ml-[5px]">{number}</div>
                    }
                    <div className="ml-[5px]">
                        {title}
                    </div>
                </div>
                
                <button className="flex flex-nowrap">
                    View all
                </button>
            </div>
        )
    }

    return(

        <div className={`${(showLogInForm || showSignUpForm) ? 'fixed, pointer-events-none'
            : 'relative'}`}>
            <NavbarForDesktop />
            {/* {
                isLoading ? <SimpleLoading /> : */}
            
            <div className="mx-[5px] pt-[3rem] w-fit
                min-[1024px]:mx-[40px] min-[1150px]:mx-[100px]
                min-[960px]:w-[auto]">
                
                <HeaderForAlbumPage album={album} date={date} month={month} year={year} years= {years} />

                <div className="flex w-full">
                    <div className="px-[2rem] my-[1.5rem] w-full border-r-[1px] border-[#999]">
                        <div className="flex bg-[#f2f2f2] w-full flex items-center justify-center">
                            {
                                isAuthenticated ? <div className="rounded-full w-[2.5rem] h-[2.5rem] mx-[0.5rem] 
                                text-[25px] text-white bg-gradient-to-r from-[#846170] to-[#70929c]
                                flex items-center justify-center pr-[1px] pb-[5px]">
                                {firstLetterOfUsername}
                                </div> :
                            
                                <div className="bg-gradient-to-r from-[#846170] to-[#70929c] w-[50px] h-[50px]"></div>
                            }
                            
                            <div className="flex items-center p-[10px] w-full">
                                <input className="w-full px-[10px] py-[5px] text-[14px] rounded-[4px]" 
                                    type="text" placeholder="Write a comment" />
                            </div>
                        </div>

                        <div className="flex justify-between py-[1rem] w-full">
                            <div className="flex">
                                <ActionMenu />
                            </div>

                            <div className="flex text-[#999] text-[14px] items-center">
                                <div className="flex items-center fill-[#999] w-[50px] h-[23px] mr-[15px] ">
                                    <Filled_heart />
                                    <span className="ml-[5px]">
                                        {likes}
                                    </span>
                                </div>
                                
                                <div className="flex items-center w-[53px] h-[20px] mr-[10px] ">
                                    <Play_button_small />
                                    <span>
                                        {played}
                                    </span>
                                </div>

                                <div className="flex items-center w-[53px] h-[20px]">
                                    <Repost />
                                    <span className="ml-[5px]">
                                        {reposted}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex border-t-[1px] border-t-[#999] py-[2rem]">
                            <ArtistSection name={album?.artist?.[0]?.name} image={album?.artist?.[0]?.singerImage}
                                singerId= {album?.artist?.[0]?.singerId} songs= {album?.artist?.[0]?.songs} />
                    {/* right side */}
                            <div className="pl-[2rem] w-full">
                                { !isAuthenticated &&
                                    <div className="bg-[#f2f2f2] px-[10px] py-[1rem] mb-[1rem] text-[16px]">
                                        <div className="font-semibold">
                                            Follow
                                            <a href="#" className="text-[#999]"> {album?.artist?.[0]?.name ? album?.artist?.[0]?.name : "this unknown artist"} </a>
                                            and others on SoundCloud.
                                        </div>

                                        <div className="flex justify-end items-center mt-[1rem]">
                                            <button className="border-[1px] border-[#999] bg-white py-[3px] px-[1rem] rounded-[3px]
                                                flex items-center"
                                                onClick={() => {set_loginform_state(true)}}>
                                                Sign in
                                            </button>
                                            
                                            <button className="bg-[#f50] text-white py-[3px] px-[1rem] rounded-[3px] ml-[10px]
                                                flex items-center"
                                                onClick={() => {set_signupform_state(true)}}>
                                                Create a SoundCloud account
                                            </button>
                                        </div>
                                    </div>
                                }

                                {/* song-list section */}
                                <ul>
                                    <RenderSongPageForAlbum list={album?.songs} />
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="w-[300px] p-[1.5rem] text-[14px] pb-[5rem]">
                        {/* related tracks */}
                        {/* <div className="mb-[2rem]">
                            {
                                render_aside_section(Rhythm, 'Related Tracks')
                            }
                            <ul className="max-h-[16.5rem] mt-[4px] overflow-y-auto">
                                <PlaylistSection list={relatedSongs} listOfAlbums={listOfAlbums}/>
                            </ul>
                        </div> */}

                        {/* playlist */}

                        <div className="mb-[2rem]">
                            {
                                render_aside_section(Playlist, 'In Playlists')
                            }
                            <ul className="max-h-[16.5rem] mt-[4px] overflow-y-auto">
                                <PlaylistSection list={listOfAlbums} listOfAlbums={listOfAlbums}/>
                            </ul>
                        </div>
                        

                        {/* like section */}

                        <div className="mb-[1.5rem]">
                            {       
                                render_aside_section(Filled_heart, 'Likes', likes)
                            }
                            <div className="flex my-[1rem] pl-[10px]">
                                {
                                    <LikeSection listname={commentators} />
                                }
                            </div>
                        </div>

                        <div className="mb-[2rem]">
                            {
                                render_aside_section(Repost, 'Reposts', reposted)
                            }
                            <div className="flex my-[1rem] pl-[10px]">
                                { <LikeSection listname={commentators} /> }
                            </div>
                        </div>

                        {/* footer section */}

                        <FooterForDesktop />
                    </div>
                </div>
            </div> 
            {/* } */}

            {showLogInForm && <Signin_form />}
            {showSignUpForm && <SignUp_form />}
        </div>
    )
}