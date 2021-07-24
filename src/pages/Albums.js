import { useState, useEffect } from "react";
import AlbumsList from "../components/albums/AlbumsList.js";
import AlbumsTitle from "../components/albums/AlbumsTitle.js";

function Albums(){
    const [isLoading, setIsLoading] = useState(true);
    const [loadedAlbums, setLoadedAlbums] = useState([]);

    useEffect(()=>{
        setIsLoading(true);
        fetch('https://jsonplaceholder.typicode.com/albums',
        {
            method: 'GET',

        }).then(response => {
            return response.json();
        }).then(data => {
            const albums = [];
            for (const key in data){
                const album = {
                    id: key,
                    ...data[key]
                };

                albums.push(album);
            }

            setIsLoading(false);
            setLoadedAlbums(albums);
        });
    }, []);

    if(isLoading){
        return (
        <section>
            <p>Loading...</p>
        </section>
        );
    }

    return (
        <section>
            <AlbumsTitle/>
            <AlbumsList items={loadedAlbums}/>
        </section>
    );
}

export default Albums;