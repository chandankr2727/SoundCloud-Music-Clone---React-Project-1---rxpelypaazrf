import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../../../Contexts/musicContext";
import Filled_followers from "../../Logos_and_icons/filledFollowers";
import { mapArtistData } from "../../../Utils/mapFunctions";
import ArtistTabForProfilePage from "./artistTabForPrfilePage";
import { fetch_data } from "../../../Utils/fetchFunctions";







export default function FavArtistSectionForProfilePage() {

    const {favArtists, urlObject, projectId}= useContext(MusicContext);

    const [artistList, setArtistList]= useState([]);
    const [isLoading, setIsLoading]= useState(false);

    useEffect(() => {
        let arr= [];
        try {
            favArtists.forEach((id) => {
                fetch_data(urlObject.artistUrl + id, projectId)
                    .then(data => {
                        const modifiedData= mapArtistData(data);
                        arr= [...arr, modifiedData];
                        setArtistList(arr); 

                })
            })
        } catch(error) {
            console.log("error in rendering related songs: ", error);
        } finally {
             
            setIsLoading(false);
        }
    }, [])


    return (
        isLoading ? <div>loading</div> :
        <div className="w-fit px-[1rem] mt-[3rem] text-[#999]">
            <div className="flex justify-between items-center text-[14px] font-semibold
                border-b border-[#ccc] pb-[6px]">
                <div className="flex items-center">
                    <Filled_followers width={"18px"} height={"18px"} />
                    <p className="pl-[8px]">{favArtists?.length} likes</p>
                </div>
                <button className="hover:text-[#111]">View all</button>
            </div>
        
            <div className="w-full max-h-[14rem] overflow-hidden flex flex-col pt-[10px] mb-[1.5rem]">
                {isLoading && <div className="text-[10rem]">Loading....</div>}
                {
                    artistList.map((item, i) => {
                        const {singerId}= item;
                        return (
                            <li key={i} className="flex items-center justify-between
                                py-[0.6rem] flex-1" >
                                <ArtistTabForProfilePage item= {item} />
                            </li>
                        )
                    })
                }
            </div>
        </div>
    )
}




// const dropdown = document.getElementById('dropdown');

// const dropdownButton = document.getElementById('dropdownButton');

// const dropdownContent = dropdown.querySelector('.dropdown-content');

// // Function to show the dropdown

// function showDropdown() {

// dropdownContent.style.display = 'block';

// }

// // Function to hide the dropdown

// function hideDropdown() {

// dropdownContent.style.display = 'none';

// }

// // Toggle the dropdown on button click

// dropdownButton.addEventListener('click', (e) => {

// if (dropdownContent.style.display !== 'block') {

// showDropdown();

// } else {

// hideDropdown();

// }

// e.stopPropagation(); // Stop this click from being propagated to document

// });

// // Close the dropdown if clicked outside

// document.addEventListener('click', (e) => {

// if (!dropdown.contains(e.target)) { // Check if click is outside the dropdown

// hideDropdown();

// }

// });


//  ------------------------------------------------------------------------------------------------------

// for pop up notification

// import Notification from './Notification';

// function Song() {

// const [liked, setLiked] = useState(false);

// const handleLike = () => {

// setLiked(true);

// // Any other logic you need when liking a song

// }

// return (

// <div>

// {liked && <Notification message="Song liked!" />}

// <button onClick={handleLike}>Like Song</button>

// </div>

// );

// }

// export default Song;