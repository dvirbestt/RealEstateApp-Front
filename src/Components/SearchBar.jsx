import React, {useRef} from 'react';

function SearchBar(props) {

    const cityRef= useRef()

    return (
        <div className="search-bar">
            <h2>Search For Your Next Home Now!</h2>
            <input type="text" ref={cityRef} placeholder="Choose City"/>
            <select>
                <option>Rooms</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6+</option>
            </select>
            <button className="login-button">Search</button>
        </div>
    );
}

export default SearchBar;