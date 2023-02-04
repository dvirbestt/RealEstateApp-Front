import React, {useEffect, useState} from 'react';
import "../Styles/Card.scss"
import {IoIosArrowDown} from 'react-icons/io'

function Card(props) {


    return (
        <>
                <div className="post-card" >
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohU0GuEqiOYmKV29ND5tbe-Wb10NnXbKW8o-nPacV&s"/>
                    <div className="details-container">
                        <div className="address"><b>{props.post.address}</b></div>
                        <div className="basic-info">
                            <div><b>City:</b>{props.post.city}</div>
                            <div><b>Rooms:</b> {props.post.numOfRooms}</div>
                        </div>
                        <div>
                            <div onClick={props.handleClick}>Press For More Info</div>
                            <IoIosArrowDown width="10px"/></div>
                    </div>
                </div>

        </>
    );
}

export default Card;