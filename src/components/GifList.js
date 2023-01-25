import React from "react";

function GifList({gifs}) {
    return (
        <div className="gifs">
            {
                gifs.map((gif, index) => {
                    return (
                        <img key={index} src={gif.images.original.url}  alt="am tired"/>
                    )
                }
                )
            }
        </div>
    )
}

export default GifList;