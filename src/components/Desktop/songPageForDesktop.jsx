import { useContext, useState } from "react";
import { MusicContext } from "../../Contexts/musicContext";
import Play_button_small from "../Logos_and_icons/playButton_small";
import Filled_heart from "../Logos_and_icons/filledHeart";
import Comment from "../Logos_and_icons/comment";
import Minor_sound_cloud_logo from "../Logos_and_icons/minorSoundCloudLogo";
import Repost from "../Logos_and_icons/repost";
import Playlist from "../Logos_and_icons/playlist";
import { useParams } from "react-router";
import Signin_form from "../../Pages/Authentication/singin_form";
import SignUp_form from "../../Pages/Authentication/signup_form";
import FooterForDesktop from "../../Pages/Desktop/FooterForDesktop";
import NavbarForDesktop from "../../Pages/Desktop/navbarForDesktop";
import { UserContext } from "../../Contexts/authenticationContext";
import ActionMenu from "./actionMenu";
import useFetchSingleSong from "../../Custom_hooks/useFetchSingleSong";
import { useFetchAlbums } from "../../Custom_hooks/useFetchAlbums";
import HeaderForSongPage from "./Song_page_components/headerForSongPage";
import ArtistSection from "./Song_page_components/artistSection";
import LikeSection from "./Song_page_components/likeSection";
import PlaylistSection from "./Song_page_components/playlistSection";
import { AudioContext } from "../../Contexts/audioContext";



function SongPageForDesktop() {
    const {commentators, myRandom, urlObject, years}= useContext(MusicContext);


    const {isAuthenticated, showLogInForm, showSignUpForm, set_loginform_state, set_signupform_state,
        firstLetterOfUsername}= useContext(UserContext);

    const {songId}= useParams();
    
    const [likes, setLikes]= useState(myRandom(500) + "k");
    const [reposted, setReposted]= useState(myRandom(50));
    const [played, setPlayed]= useState(myRandom(5000));

    
    const [song, loader1, error1]= useFetchSingleSong(urlObject.singleSongUrl + songId);
    const [listOfAlbums, loader2, error2]= useFetchAlbums(urlObject.albumsUrl + "?limit= 12");


    const year= song?.release?.slice(0, 4);
    const month= song?.release?.slice(5,7);
    const date= song?.release?.slice(8,10);


    // // to fetch related songs
    // useEffect(() => {
    //     setIsLoading(true);

    //     if(song) {
    //         try {
    //             let arr= [];

    //             song?.artist?.[0]?.songs.forEach((item) => {
    //                 fetch_data(urlObject.singleSongUrl + item)
    //                 // .then(data => console.log("data: ", data))
    //                 .then(data => {
    //                     const modifiedData= updateData(data);
    //                     // console.log("modified data: ", modifiedData);
    //                     arr= [...arr, modifiedData];
    //                     // console.log("modifide arr: ", arr);
    //                 })
                    
    //             })
    //             setRelatedSongs(arr); 
    //         } catch(error) {
    //             console.log("error in rendering related songs: ", error);
    //         } finally {
                 
    //             setIsLoading(false);
    //         }
    //     }
        
    // }, [song])

    
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

        <div style={(showLogInForm || showSignUpForm) ? {position: 'fixed', pointerEvents: 'none'} : {position: 'relative'}}>
            <NavbarForDesktop />
            {/* {
                isLoading ? <SimpleLoading /> : */}
            
            <div className="mx-[5px] pt-[3rem] w-fit
                min-[1024px]:mx-[40px] min-[1150px]:mx-[100px]
                min-[960px]:w-[auto]">
                
                <HeaderForSongPage song={song} date={date} month={month} year={year} years= {years} />

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
                                <ActionMenu songId={songId} />
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
                            <ArtistSection name={song?.artist?.[0]?.name} image={song?.artist?.[0]?.singerImage} 
                                singerId={song?.artist?.[0]?.singerId} songs={song?.artist?.[0]?.songs} />
                    {/* right side */}
                            <div className="pl-[2rem] w-full">
                                { !isAuthenticated &&
                                    <div className="bg-[#f2f2f2] px-[10px] py-[1rem] mb-[1rem] text-[16px]">
                                        <div className="font-semibold">
                                            Follow
                                            <a href="#" className="text-[#999]"> {song?.artist?.[0]?.name ? song?.artist?.[0]?.name : "this unknown artist"} </a>
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

                                {/* comment section */}
                                <div className="mt-[1rem] text-[16px]">
                                    {/* header */}

                                    <div className="flex text-[#999] items-center pb-[1rem] border-b-[1px] border-[#999]">
                                        <Comment />
                                        <p className="ml-[5px]">
                                            {commentators.length} comments
                                        </p>
                                    </div>

                                    {/* comment section */}

                                    <ul className="">
                                        {
                                            commentators.map((person) => {
                                                const {name, comment, time, image}= person;
                                                return (
                                                    <li key={name} className="flex items-center w-full py-[10px]">
                                                        <div className="w-[50px] h-[46px] flex flex-col justify-center
                                                             bg-gradient-to-r from-[#846170] to-[#70929c] rounded-full">
                                                            <img className="rounded-full" src={image} alt={name} />
                                                        </div>
                                                        
                                                        <div className="flex justify-between w-full ml-[10px]">
                                                            <div>
                                                                <div className="text-[#999]">{name}</div>
                                                                <div className="text-[14px]">
                                                                    {comment}
                                                                </div>
                                                            </div>

                                                            <div className="text-[#999] text-[14px] mr-[10px] pt-[10px]">
                                                                {time} days ago
                                                            </div>
                                                        </div>
                                                        
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>

                                    <div className="flex w-full mt-[3rem]">
                                        <div className="border-t-[1px] border-[#999] w-[50%]"></div>
                                        <span className="px-[10px] mt-[-18px]">
                                            <Minor_sound_cloud_logo />
                                        </span>
                                        
                                        <div className="border-t-[1px] border-[#999] w-[50%]"></div>
                                    </div>
                                </div>
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

export default SongPageForDesktop;