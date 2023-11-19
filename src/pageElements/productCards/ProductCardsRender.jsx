import React from "react";
import s from './productCards.module.scss'
import { Link } from "react-router-dom";
import { serverApi } from "../../utils/consts";

const ProductCardsRender = ({ orderData }) => {
    return (
        <Link to={orderData.link} className={s.cardMain}>
            <div className={s.headerForPhone}>
                <div className={s.napePriceContainer}>
                    <h3>{orderData.description}</h3>
                    <h3>{orderData.newPrice}<span>грн</span></h3>
                </div>
            </div>
            <img src={`${serverApi}/static/${orderData.image}`} alt="" />
            <div className={s.cardDescription}>
                <span className={s.description}>{orderData.description}</span>
                <div className={s.topContentContainer}>
                    <div className={s.topContent}>
                        <div className={s.oldPrice}>
                            <span className={s.old}><s>{orderData.oldPrice}</s>₴</span>
                        </div>
                        <div className={s.newPrice}>
                            <span className={s.price}>{orderData.newPrice}₴</span>
                        </div>
                    </div>
                    <div className={s.showLanding}>
                        <span>ДЕТАЛЬНІШЕ</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCardsRender;