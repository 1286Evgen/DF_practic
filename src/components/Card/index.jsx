import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
    const [isLike, setIsLike] = useState(likes.includes(3));
    const [inBasket, setInBasket] = useState(false);
    const navigate = useNavigate();
    const tag = tags[tags.length - 1];
    const imgStyle = {backgroundImage: `url(${pictures})`}
    const tagHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        navigate(`/products/category/${tag}`);
    }
    const basketHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setInBasket(!inBasket);
    }
    const likeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsLike(!isLike);
    }
    return (
    <Link className="card" to={`/product/${_id}`}>
        {tag && <button 
        className={`card__button card__tag card__tag_${tag}`}
        onClick={tagHandler}>
        {tag}</button>}
        <span className="card__img" style={imgStyle}></span>
        <span className="card__content">
            <span className="card__title">{name}</span>
            <span className="card__rate">
                <span>
                    <i className="lni lni-star-fill"></i>
                </span> 
                <span className="card__review">
                {reviews.length> 0 
                ? `${reviews.length} отзывов`
                : "нет отзывов"
                }
                </span>
            </span>
            <span className="card__price">
                {discount > 0 
                ? <>
                {Math.ceil(price * ((100 - discount)/100))} Р 
                <del className="card__price_discount">{price} Р</del>
                </>
                : price + " Р"
                }
            </span>
            <span className="card__buttons">
                {inBasket 
                ? <button 
                    className="card__button card__button_basket"
                    onClick={basketHandler}><i className="lni lni-cart-full"/> В корзине
                </button> 
                : <button 
                    className="card__button card__button_basket"
                    onClick={basketHandler}><i className="lni lni-cart"/> В корзину
                </button>}
                <button 
                className="card__button"
                onClick={likeHandler}>
                {isLike 
                ? <i className="lni lni-heart-fill"/>
                : <i className="lni lni-heart"/>}
                </button>
            </span>
        </span>
    </Link>
    )
}

export default Card;