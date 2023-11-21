import React, { useEffect, useState } from "react";
import s from './cameraContent.module.scss';
import pay from './statik/pay.png'
import card from './statik/card.png'
import parcel from './statik/parcel.png'
import makeOffer from './statik/makeOffer.png'
import delivery from './statik/delivery.png'
import successfulDelivery from './statik/successfulDelivery.png'
import relax from './statik/relax.png'
import ButtonOffer from "./pageElements/buttonOffer/ButtonOffer";
import TimeLeft from "./timeLeft/TimeLeft";
import curwedArrBlack from './statik/curwedArrBlack.png'
import ActionPrices from "./actionsPrices/ActionPrices";
import { parseData, showMessage } from '../../utils/functions'
import { serverApi } from '../../utils/consts';

const CameraContent7 = ({ linkOfOffer }) => {

    const [howMatchDay, setHowMatchDay] = useState(0.2)

    useEffect(() => {
        const encodedLink = encodeURIComponent(linkOfOffer)
        const url = `${serverApi}/api/offers/choicerouter?link=${encodedLink}`;
        fetch(url, {
            method: 'GET',
        })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('itemPrice', data.newPrice)
                setHowMatchDay(data.setTimer)
            })
            .catch(error => {
                // Обробка помилки
                showMessage(`Помилка при оновленні: Неможливо з'єднатися з сервером`, 3000);
                console.error('Error updating offer:', error);
            });
    }, [])

    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + (howMatchDay * 24));

    const stepsArr = [
        { step: 'Крок 1:', text: `Залишіть заявку на нашому сайті. Менеджер зв'яжеться з Вами найближчим часом та надасть консультацію.`, icon: makeOffer },
        { step: 'Крок 2:', text: `Ми надсилаємо Ваше замовлення поштою. Після отримання Ви оплачуєте товар.`, icon: delivery },
        { step: 'Крок 3:', text: `Ви отримуєте пристрій протягом 2-3 робочих днів.`, icon: successfulDelivery },
        { step: 'Крок 4:', text: `Насолоджуєтесь всіма перевагами MagSafe`, icon: relax },
    ]
    const priorityArr = [
        { id: 1, icon: pay, description: 'Оплата при отриманні' },
        { id: 2, icon: parcel, description: 'Відправка щодня' },
        { id: 3, icon: card, description: 'Можлива оплата на карту' },
    ]

    return (
        <div className={s.content7Main}>
            <div className={s.priority} style={{ width: window.innerWidth }}>
                {priorityArr.map((el, i) => {
                    return (
                        <div key={i} className={s.priorityArr}>
                            <img src={el.icon} alt="" />
                            <span>{el.description}</span>
                        </div>
                    )
                })}
            </div>
            <h1>Просте замовлення</h1>
            <div style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }}
                className={s.stepsForOffer}>
                {stepsArr.map((el, i) => {
                    return (
                        <div className={s.step} key={i}>
                            <div className={s.icon}>
                                <img src={el.icon} alt="" />
                            </div>
                            <div className={s.content}>
                                <div className={s.head}>{el.step}</div>
                                <div className={s.description}>{el.text}</div>
                            </div>
                        </div>
                    )
                })}
                <div className={s.priceContentMain}>
                    <ActionPrices linkOfOffer={linkOfOffer} backgrount={'white'} />
                    <div className={s.actionEnd}>
                        <img src={curwedArrBlack} alt="" />
                        <span>До кінця акції залишилось:</span>
                    </div>
                    <div className={s.timeLeft}><TimeLeft expiryDate={expiryDate} /></div>
                    <div className={s.offerButton1}>
                        <ButtonOffer buttonPlace='2' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CameraContent7;