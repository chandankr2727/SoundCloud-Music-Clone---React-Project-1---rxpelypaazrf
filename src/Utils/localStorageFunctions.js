
export function openTheModal(e, setModal) {
    if(e.stopPropogation) {
        e.stopPropogation();
    }
    
    setModal((old) => !old);
}

export function closeTheModal(e, setModal) {
    setModal(false);
}



// operations for local storage

export function getListFromLocal(list) {
    const data= localStorage.getItem(list);
    let requiredList;

    if(data) {
        requiredList= JSON.parse(data);
    } else {
        requiredList= [];
    }
    return requiredList;
}


export function add_RemoveFromFavourites(songId, setIsFollowed, setFavourite, list, localName) {
    
    if(isPresentInList(songId, list)) {
        return removeItemFromLocal(setFavourite , songId, list, localName, setIsFollowed);
    } else {
        return addItemInList(setFavourite , songId, list, localName, setIsFollowed);
    }
}


export function isPresentInList(songId, list) {
    const isPresent= (list != [] && songId) && list.find(id => id === songId);

    if(isPresent) {
        return true;
    } else {
        return false;
    }
}

export function addItemInList(setFavourite , songId, list, localName, setIsFollowed) {

    const updatedFavourites= [...list, songId];
    setFavourite(updatedFavourites);

    setIsFollowed(true);

    // console.log("added: ", updatedFavourites);
    localStorage.setItem(localName, JSON.stringify(updatedFavourites));
}

export function removeItemFromLocal(setFavourite , songId, list, localName, setIsFollowed) {
    const updatedFavourites= list.filter(id => id !== songId);
    setFavourite(updatedFavourites);

    setIsFollowed(false);

    // console.log("removed: ", updatedFavourites);
    localStorage.setItem(localName, JSON.stringify(updatedFavourites));
}




// for like/unlike button
export function isPresentInFavourites(setFavourite , album, songList, setIsLiked) {

    const {songId}= album;
    const isPresent= songList.find((item) => item.songId === songId);

    if(isPresent) {
       return removeFavouriteSong(setFavourite , album, songList, setIsLiked)
        
    } else {
       return addFavouriteSong(setFavourite , album, songList, setIsLiked)
    }
}

export function addFavouriteSong(setFavourite , album, songList, setIsLiked) {

    const updatedFavourites= [...songList, album];
    // console.log("added: ", updatedFavourites);
    setFavourite(updatedFavourites);
    setIsLiked(true);
}

export function removeFavouriteSong(setFavourite , album, songList, setIsLiked) {
    const {songId}= album;

    const updatedFavourites= songList.filter((item) => item.songId !== songId);
    // console.log("removed: ", updatedFavourites);
    setFavourite(updatedFavourites);
    setIsLiked(false);
}
