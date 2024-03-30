


export function mapSingleSongData(data) {

    return {
        artist: data.artist.map((item) => {
            let songList= item.songs;
            if(songList.length > 15) {
                songList= songList.slice(0, 15);
            }
            return {
                singerImage: item.image,
                name: item.name,
                songs: item.songs,
                singerId: item._id,
            }
        }),
        audio: data.audio_url,
        image: data.thumbnail,
        title: data.title,
        release: data.dateOfRelease,
        songId: data._id,
    }
}

export function mapSingleAlbumData(data) {

    return {
        artist: data.artists.map((item) => {
            return {
                singerImage: item.image,
                name: item.name,
                songs: item.songs,
                singerId: item._id,
            }
        }),
        image: data.image,
        title: data.title,
        release: data.release,
        albumId: data._id,
        songs: data.songs?.map((song) => {
            return {
                artist: song.artist,
                audio: song.audio_url,
                release: song.dateOfRelease,
                image: song.thumbnail,
                title: song.title,
                songId: song._id,
            }
        }),
    }
}



export function extractDataFromAlbumList(data) {

    const mappedData= data.map((item) => {
        
        return {
            artist: item.artists.map((music) => {
                return {
                    singerImage: music.image,
                    name: music.name, 
                    songs: music.songs,
                    singerId: music._id,
                }
            }),
            title: item.title,
            image: item.image,
            release: item.release,
            songs: item.songs,
            albumId: item._id,
        }
    })

    return mappedData;
}



export function extractDataFromSongList(data) {
    
    const mappedData= data?.map((item) => {
        return {
            artist: item.artist.map((item) => {
                return {
                    singerImage: item.image,
                    name: item.name,
                    songs: item.songs,
                    singerId: item._id,
                }
            }),
            audio: item.audio_url,
            image: item.thumbnail,
            title: item.title,
            release: item.dateOfRelease,
            songId: item._id,
        }
    })


    return mappedData;
}



export function mapArtistData(data) {
    return {
        
        singerImage: data?.image,
        singerName: data?.name,
        songs: data?.songs,
        singerId: data?._id,
    }
}