import React from 'react';
import './Card.css'

class Card extends React.Component {
    constructor() {
        super();
        this.onCardClick=this.onCardClick.bind(this);
    }

    onCardClick(event) {
        this.props.onCardClick(this.props.url);
    }

    render() {
        return (
            <div className="card" style={{animationDelay: this.props.index*0.05 + "s"}} onClick={this.onCardClick}>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default Card;