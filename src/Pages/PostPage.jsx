import React, {useEffect, useState} from 'react';
import ExtendedCard from "../Components/ExtendedCard.jsx";

function PostPage(props) {

    const [post,setPost] = useState({});

    const getPost = async () => {
        let url = window.location.href
        let urlArray = url.split("/")
        let id = {
            id : urlArray[urlArray.length-1]
        }
        const response = await fetch("http://localhost:8080/post/getById",{
            method:"POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(id)
        })
        setPost(await response.json())
    }

    useEffect(() => {
        getPost()
    }, []);

    return (
        <div>
            <ExtendedCard post={post}/>
        </div>
    );
}

export default PostPage;