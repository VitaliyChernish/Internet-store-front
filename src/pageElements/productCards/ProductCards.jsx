import React, { useEffect, useState } from "react";
import s from './productCards.module.scss'
import { serverApi } from "../../utils/consts";
import ProductCardsRender from "./ProductCardsRender";

const ProductCards = () => {

    const [offerData, setOfferData] = useState([]);

    useEffect(() => {
        fetchOfferData()
    }, [])

    function fetchOfferData() {
        fetch(`${serverApi}:5000/api/offers/getAllOffers`)
            .then(response => response.json())
            .then(offers => {
                setOfferData(offers);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className={s.productCardsMain}>
            {/* <h1>ProductCatds</h1> */}
            <div className={s.productCardsContainer}>
                {offerData.map((el, i) => (
                    <ProductCardsRender key={i} orderData={el} />
                ))}
            </div>
        </div>
    )
}

export default ProductCards;