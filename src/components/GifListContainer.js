import React, {useState, useEffect} from "react";

import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {

    const [gifs, setGifs] = useState([]);
    const [search, setSearch] = useState("dolphin")

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=TBZzv9IHNOOTOehRFgxWFCTET63q8VaE`)
        .then(response => response.json())
        .then(data => setGifs(data.data))
    }, [search])

    function setSearchString(str) {
        setSearch(str)
    }
    
    return (
        <div className="gif-container">
            <GifSearch setSearchString={setSearchString}/>
            <GifList gifs={gifs}  />
        </div>
    );
}

export default GifListContainer;