import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../Contexts/musicContext";
import axios from "axios";
import { mapSingleAlbumData, mapSingleSongData } from "../Utils/mapFunctions";
import { AudioContext } from "../Contexts/audioContext";
import { fetch_data } from "../Utils/fetchFunctions";



export default function useFetchSingleAlbum(url) {

    const {projectId}= useContext(MusicContext);


    const [data, setData]= useState([]);
    const [error, setError]= useState("");
    const [loader, setLoader]= useState(false);


    useEffect(() => {
        setLoader(true);

        try {
            fetch_data(url, projectId)
            .then((data) => {
                const updatedData= mapSingleAlbumData(data);
                setData(updatedData);
            })
            .catch((error) => {
                console.log(error);
            })
            
        } catch(error) {
            console.log(error);
            setError(error)
        } finally {
            setLoader(false);
        }
    }, [url]);

    return [data, loader, error];
}