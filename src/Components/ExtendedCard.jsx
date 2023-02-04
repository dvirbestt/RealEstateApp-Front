import React from 'react';

function ExtendedCard(props) {

    const post = props.post

    const copyToClipBoard = () => {
        let Url = "http://localhost:5173/post/" + post.id
        navigator.clipboard.writeText(Url);
    }

    return (
        <div className={"extended-post-card"}>
            <div>
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s"/>
            </div>
            <div className="details">
                <div className="property-details">
                    <div>{post.address}</div>
                    <div>{post.city}</div>
                    <div>{post.numOfRooms}</div>
                    <div>{post.parameter}</div>
                    <div>{post.description}</div>
                </div>
                <div className="contact-details">
                    <div>{post.authorFirstName}</div>
                    <div>{post.authorPhone}</div>
                    <div>{post.authorEmail}</div>
                </div>
            </div>
            <div onClick={copyToClipBoard}>Copy Post To Clipboard</div>
            <div onClick={props.handleClick}>Close Extended Details</div>
        </div>
    );
}

export default ExtendedCard;