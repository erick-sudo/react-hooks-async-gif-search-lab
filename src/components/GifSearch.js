import React from "react";

function GifSearch({setSearchString}) {
    return (
        <form className="form" onSubmit={(event) => {
            event.preventDefault()
            setSearchString(event.target.search.value)
        }}>
            <label> Enter a Search Term:</label>
            <input name="search" type="text" placeholder="Search Gif" />
            <button>Search</button>
        </form>
    )
}

export default GifSearch;