import React, {useState} from 'react';
import ExtendedCard from "./ExtendedCard.jsx";
import Card from "./Card.jsx"

function CardSwitcher(props) {

    const [extend,setExtend] = useState(false);

    const handleClick = () => {
        setExtend(!extend);
    }

    return (
        <div>
            {!extend ? <Card post={props.post} handleClick={handleClick}/> : <ExtendedCard post={props.post} handleClick={handleClick}/>}
        </div>
    );
}

export default CardSwitcher;