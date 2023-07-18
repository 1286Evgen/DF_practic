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
    const imgStyle = {
        backgroundImage: `url(${pictures})`
    }
    return (
    <Link className="card" to={`/product/${_id}`}>
        <button className={`card__tag card__tag_${tag}`}>{tag}</button>
        <span className="card__img" style={imgStyle}></span>
        <span className="card__content">
            <span className="card__title">{name}</span>
            <span className="card__rate">
                {reviews.length}
            </span>
            <span className="card__price">{price}</span>
            <button>В корзину</button>
            <button>Like</button>
        </span>
    </Link>
    )
}
/*
    const Card = () => {
    return (
    <>
    </>
    )
    }
*/
export default Card;