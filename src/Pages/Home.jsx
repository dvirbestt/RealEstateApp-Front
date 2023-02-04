import React from 'react';
import SearchBar from "../Components/SearchBar.jsx";
import RandomPosts from "../Components/RandomPosts.jsx";

function Home() {
    return (
        <div>
            <SearchBar/>
            <RandomPosts/>
        </div>
    );
}

export default Home;