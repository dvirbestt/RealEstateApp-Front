import React, {useEffect, useState} from 'react';
import Card from "./Card.jsx";
import "../Styles/CardContainer.scss"
import ExtendedCard from "./ExtendedCard.jsx";
import CardSwitcher from "./CardSwitcher.jsx";

function RandomPosts(props) {

    const [posts,setPosts] = useState([])

    const [extend,setExtend] = useState(false);

    const getRandom = async () => {
        const response = await fetch("http://localhost:8080/post/random")
        const data = await response.json()
        setPosts(data)
    }

    const onToggle = (post) => {
        setExtend(!extend)
    }


    useEffect(() => {
        getRandom()
    }, []);

    return (
        <div className="card-container">
            <div> {posts.map((post) =>
                    (<div key={post.id}>
                        <CardSwitcher post={post} />
                    </div>))}
            </div>


        </div>
    );
}

export default RandomPosts;