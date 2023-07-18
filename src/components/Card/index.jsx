import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Card = ({
    _id,
    name,
    price,
    discount,
    pictures,
    tags,
    likes,
    reviews
}) => {
    const tag = tags[tags.length - 1];
    const imgStyle = {backgroundImage: `url(${pictures})`}
    const tagHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const basketHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    const likeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    return (
    <Link className="card" to={`/product/${_id}`}>
        <button className={`card__button card__tag card__tag_${tag}`}>{tag}</button>
        <span className="card__img" style={imgStyle}></span>
        <span className="card__content">
            <span className="card__title">{name}</span>
            <span className="card__rate">
                {reviews.length}
            </span>
            <span className="card__price">{price}</span>
            <span className="card__buttons">
                <button className="card__button card__button_basket">В корзину</button>
                <button className="card__button">Like</button>
            </span>
        </span>
    </Link>
    )
}

export default Card;