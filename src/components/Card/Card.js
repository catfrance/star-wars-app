import React from 'react';
import './Card.css'

function Card(props) {
    return (
        <div className="card" style={{animationDelay: props.index*0.05 + "s"}}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default Card;