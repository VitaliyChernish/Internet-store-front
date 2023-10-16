import React, { useEffect, useState } from "react";
import s from './actionPrices.module.scss';
import { serverApi } from "../../../utils/consts";
import { showMessage } from "../../../utils/functions";

const ActionPrices = ({ linkOfOffer, backgrount, fontColor, containerWidth }) => {

    const [oldPrice, setOldPrice] = useState(0)
    const [newPrice, setNewPrice] = useState(0)

    useEffect(() => {
        const encodedLink = encodeURIComponent(linkOfOffer)
        console.log('encodedLink: ', encodedLink)
        const url = `${serverApi}:5000/api/offers/choicerouter?link=${encodedLink}`;
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('itemPrice', data.newPrice)
                setNewPrice(data.newPrice)
                setOldPrice(data.oldPrice)
            })
            .catch(error => {
                // Обробка помилки
                showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
                console.error('Error updating offer:', error);
            });
        
    }, [])

    return (
        <div style={{
            backgroundColor: backgrount,
            width: (containerWidth ? containerWidth : (window.innerWidth <= 599 ? window.innerWidth : 600)),
            color: fontColor,
        }}>
            <div className={s.topContent}>
                <div className={s.oldPrice}>
                    <span className={s.old}>Звичайна ціна</span>
                    <span className={s.price}><s>{oldPrice}</s>грн</span>
                </div>
                <div className={s.newPrice}>
                    <span className={s.old}>Акційна ціна</span>
                    <span className={s.price}>{newPrice}грн</span>
                </div>
            </div>
        </div>
    )
}

export default ActionPrices;