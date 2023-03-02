import React from "react";
import "./componets-css/cardproduct.css";


const Card = (props) => {
    return (
        <div className="cardwarpper">
            <div className="card-image">
                <img src={props.image} alt="loading" />
            </div>
            <div className="card-name">
                <h2>{props.name}</h2>
            </div>
            <div className="card-price">
                <h3>price: {props.price}</h3>
            </div>
            <div className="card-rating">
                <h3>stars: {props.stars}</h3>
            </div>
            <button className="button">ADD TO CART</button>
        </div>
    )
}

export default Card;