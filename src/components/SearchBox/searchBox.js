import React from 'react';

function SearchBox(props) {

    return (
        <span id="searchBox">
            <label>write the movie name you're looking for🔍: </label>
            <input type="text" value={props.value}
                onChange={(event) => props.setSearchValue(event.target.value)}></input>
        </span>
    );
}

export default SearchBox;