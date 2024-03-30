import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../Contexts/musicContext";
import axios from "axios";
import { extractDataFromSongList } from "../Utils/mapFunctions";
import { fetch_data } from "../Utils/fetchFunctions";



export function useFetchSongs(url) {
    const {projectId}= useContext(MusicContext);

    const [data, setData]= useState([]);
    const [error, setError]= useState("");
    const [loader, setLoader]= useState(false);

    useEffect(() => {
        setLoader(true);
        try{
            fetch_data(url, projectId)
            .then((data) => extractDataFromSongList(data))
            .then((mappedData) => setData(mappedData));
        }catch(error) {
            console.log("error: ", error);
            setError(error);
        } finally {
            setLoader(false);
        } 
    }, [url]);

    return [data, loader, error];
}
