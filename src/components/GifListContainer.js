import React, {useState, useEffect} from "react";

import GifList from "./GifList";

function GifListContainer() {

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=TBZzv9IHNOOTOehRFgxWFCTET63q8VaE")
        .then(response => response.json())
        .then(data => setGifs(data.data))
    }, [])



    return (
        <div className="gif-container">
            <GifList gifs={gifs}  />
        </div>
    );
}

export default GifListContainer;