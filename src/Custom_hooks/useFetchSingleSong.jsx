import { useContext, useEffect, useState } from "react";
import { MusicContext } from "../Contexts/musicContext";
import axios from "axios";
import { mapSingleSongData } from "../Utils/mapFunctions";
import { fetch_data } from "../Utils/fetchFunctions";



export default function useFetchSingleSong(url) {

    const {projectId, setCurrentSong}= useContext(MusicContext);

    const [data, setData]= useState([]);
    const [error, setError]= useState("");
    const [loader, setLoader]= useState(false);


    useEffect(() => {
        setLoader(true);

        try {
            fetch_data(url, projectId)
            .then((data) => {
                const updatedData= mapSingleSongData(data);
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