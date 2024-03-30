import React, { useState } from "react";


const AudioContext= React.createContext();

function AudioProvider({children}) {

    const [isPlaying, setIsPlaying]= useState(false);
    const [isActive, setIsActive]= useState(false);

    const [currentSongs, setCurrentSongs]= useState([]);
    const [currIndex, setCurrIndex]= useState(0);
    const [activeSong, setActiveSong]= useState({});

    const [duration, setDuration] = useState(0);
    const [seekTime, setSeekTime] = useState(0);
    const [appTime, setAppTime] = useState(0);

    const [volume, setVolume] = useState(0.3);
    const [repeat, setRepeat] = useState(false);
    const [shuffle, setShuffle] = useState(false);

    

    const playPause= (val) => {
        setIsPlaying(val);
    }

    function handleActiveSong(song) {
        setActiveSong(song)
        setIsActive(true);
        
    }

    function nextSong(index) {
        setActiveSong(currentSongs[index]);
    }

    function prevSong(index) {
       
    }



    return (
        <AudioContext.Provider value={{isPlaying, setIsPlaying,isActive, setIsActive, currIndex, 
            setCurrIndex, currentSongs, setCurrentSongs, activeSong, setActiveSong, playPause, handleActiveSong,
            nextSong, prevSong, duration, setDuration, seekTime, setSeekTime, appTime, setAppTime, volume, setVolume,
            repeat, setRepeat, shuffle, setShuffle }}>
            {children}
        </AudioContext.Provider>
    )
}
export {AudioContext, AudioProvider};