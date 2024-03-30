import React,{useEffect, useState} from "react";


const MusicContext= React.createContext();

function MusicProvider({children}) {

    const projectId= "rxpelypaazrf";

    const [favourites, setFavourites]= useState([]);
    const [favArtists, setFavArtists]= useState([]);

    const urlObject= {
                        musicUrl: 'https://academics.newtonschool.co/api/v1/music/song',
                        albumsUrl: 'https://academics.newtonschool.co/api/v1/music/album',
                        filteredUrl: 'https://academics.newtonschool.co/api/v1/music/song?filter=',
                        searchUrl: 'https://academics.newtonschool.co/api/v1/music/song?search=',
                        singleSongUrl: 'https://academics.newtonschool.co/api/v1/music/song/',
                        singleAlbumUrl: 'https://academics.newtonschool.co/api/v1/music/album/',
                        artistUrl: "https://academics.newtonschool.co/api/v1/music/artist/",
                    }

    const years= ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

    
    const anchor_tags= [{tag: 'Directory', url: "https://m.soundcloud.com/people/directory"}, 
                {tag: 'About us', url: "https://m.soundcloud.com/pages/contact"}, 
                {tag: 'Artist Resources', url: "https://community.soundcloud.com/playbook-articles/introducing-the-new-dashboard-on-soundcloud-for-artists"}, 
                {tag: 'Blog', url: "https://blog.soundcloud.com/"}, 
                {tag: 'Jobs', url: "https://careers.soundcloud.com/"}, 
                {tag: 'Developers', url: "https://developers.soundcloud.com/"}, 
                {tag: 'Help', url: "https://help.soundcloud.com/hc/en-us"}, 
                {tag: 'Legal', url: "https://m.soundcloud.com/terms-of-use"}, 
                {tag: 'Privacy', url: "https://soundcloud.com/pages/privacy"}, 
                {tag: 'Cookie Policy', url: "https://m.soundcloud.com/pages/cookies"}, 
                {tag: 'Consent Manager', url: "#"},
                {tag: 'Imprint', url: "https://m.soundcloud.com/imprint"}, 
                {tag: 'Charts', url: "https://soundcloud.com/charts/top"}];

    const commentators= [{'name': 'Sandhu Sab', 'comment': "its Amazing!", 'time': "1", 'image': "https://i1.sndcdn.com/avatars-001287273585-ejx4ne-t120x120.jpg"},
                        {'name': 'Sammy Simpson', 'comment': "Not bad!", 'time': "3", 'image': "https://i1.sndcdn.com/avatars-001264383592-c65y2j-t120x120.jpg"},
                        {'name': 'Gagan Singh', 'comment': "Beautiful song", 'time': "4", 'image': "https://i1.sndcdn.com/avatars-CNt7i0xSdkhXi3bx-hyaJHA-t500x500.jpg"},
                        {'name': 'Aman Gupta', 'comment': "good", 'time': "5", 'image': "https://i1.sndcdn.com/avatars-AoCW9YxiM8aogdd5-rziD8Q-t120x120.jpg"},
                        {'name': 'Jasbir Singh', 'comment': "unique", 'time': "6", 'image': "https://i1.sndcdn.com/avatars-VI70woCoymRzoXzQ-Yyvp0g-t500x500.jpg"},
                        {'name': 'Sukhjit Kaur', 'comment': "Amazing", 'time': "6", 'image': "https://i1.sndcdn.com/avatars-000642892626-0twuwy-t500x500.jpg"},
                        {'name': 'Birendra Singh', 'comment': "Great!!", 'time': "8", 'image': "https://i1.sndcdn.com/avatars-0Egspm2RhaFnVQcz-9KfySQ-t500x500.jpg"},
                        {'name': 'Simon Wick', 'comment': "Chill Mode", 'time': "8", 'image': "https://i1.sndcdn.com/avatars-000495767190-l19zxe-t500x500.jpg"},
                        {'name': 'Xavier Linken', 'comment': "good", 'time': "10", 'image': "https://i1.sndcdn.com/avatars-fwmZr03nL9gPC5WU-UdAZKA-t500x500.jpg"},
    ]

     

    function myRandom(num) {
        return Math.floor(Math.random() * (num - 1) + 1);
    }


    function getSingers(list) {
    
        const map= new Map();
        const arr= list.map((item) => item.artist);
    
        arr.forEach((artist) => {
    
            artist.forEach((person) => {
                const {singerImage, name, singerId, songs}= person;
    
                if(!map.has(name)) {
                    map.set(name, {'singerName': name, 'singerImage': singerImage, 'singerId': singerId, 'songs': songs});
                }
            })
    
        })
        const finalArr= Array.from(map.values());
        return finalArr;
    }

    return (
        <MusicContext.Provider value={{years, anchor_tags, commentators, myRandom,  
            projectId, urlObject, getSingers, favourites, setFavourites, favArtists, setFavArtists}} >
            {children}
        </MusicContext.Provider>
    )
}



export {MusicContext, MusicProvider};
