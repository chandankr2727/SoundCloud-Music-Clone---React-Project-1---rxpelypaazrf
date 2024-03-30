import axios from "axios";
import { extractDataFromSongList } from "./mapFunctions";
import { isPresentInFavourites } from "./localStorageFunctions";


export async function fetch_data(url, projectId) {
        
        try {
            const data= await axios.get(url, {headers:{"projectId":projectId}});
           
            return data.data.data;
        } catch(error) {
            console.log(error);
        }
    }


export async function handleFavourites(album, favourites, setFavourites, token, projectId, setIsLiked) {
    const {songId}= album;
    isPresentInFavourites(setFavourites, album, favourites, setIsLiked);

    try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${token}`);
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("projectId", `${projectId}`);

        var raw = JSON.stringify({
        "songId": songId,
        });

        var requestOptions = {
        method: 'PATCH',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

       const response= await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions);
        
        if (response.ok) {
            const data = await response.json();
            
            return data.data.songs;

        } else {
            console.log("bad response: ", response);
        }
    } catch (error) {
      console.log("error: ", error);
    }
}



export async function getFavouritesList(authToken, projectId, setList) {
    if(authToken) {
      try {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${authToken}`);
        myHeaders.append("projectId", `${projectId}`);
        
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
        
        const response= await fetch("https://academics.newtonschool.co/api/v1/music/favorites/like", requestOptions);
        
        if (response.ok) {
            const data = await response.json();
            
            console.log("good respose for getting the list: ", data.data.songs);

            const songs= data.data.songs;
            const mappedData= songs.length > 0 ? extractDataFromSongList(data.data.songs) : songs;
            setList(mappedData);
  
        }
      } catch (error) {
        console.log("error for favourite-list: ", error);
      }
    }
    
  }