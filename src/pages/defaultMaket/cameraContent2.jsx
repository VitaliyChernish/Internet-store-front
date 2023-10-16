import React from "react";
import s from './cameraContent.module.scss';
import noTime from './statik/noTIme.png'
import payAfter from './statik/payAfter.png';
import like from './statik/like.png'
import complectation from './statik/NoImageAvailable.jpg'
import memoryCard from './statik/memoryCard.png'
import magnet from './statik/magnet.png'
import p1080 from './statik/1080p.png'
import mobileApp from './statik/mobileApp.png'
import ButtonOffer from "../../pageElements/buttonOffer/ButtonOffer";
import checkedIcon from './statik/checkedIcon.png'
import TimeLeft from "./timeLeft/TimeLeft";
import CameraContent4 from "./cameraContent4";

const CameraContent2 = () => {
    let day = 2.5
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + (day * 24));


    const priorityArr = [
        { id: 1, icon: noTime, description: 'Обмежена пропозиція' },
        { id: 2, icon: payAfter, description: 'Оплата при отриманні' },
        { id: 3, icon: like, description: 'Гарантія якості' },
    ]

    const iconsArrBottom = [
        { id: 1, icon: memoryCard, subtitle: 'запис на карту' },
        { id: 2, icon: magnet, subtitle: 'магнітне кріплення' },
        { id: 3, icon: p1080, subtitle: 'якість 1080р' },
        { id: 4, icon: mobileApp, subtitle: 'мобільний додаток' },
    ]

    const peculiarity = [
        { id: 1, description: 'детектор руху' },
        { id: 2, description: 'функція нічного бачення' },
        { id: 3, description: 'формат відео 1080Р' },
        { id: 4, description: 'з кутом огляду 150 °' },
        { id: 5, description: 'сумісність з iOS и Android' },
        { id: 6, description: 'запис відео під час зарядки' },
        { id: 7, description: 'трансляція з будь-якого місця' },
        { id: 8, description: 'миттєвий сигнал тривоги' },
        { id: 9, description: 'для декількох користувачів' },
        { id: 10, description: 'запис на SD-карту' },
        { id: 11, description: 'має вбудований магніт' },
        { id: 12, description: 'маленький розмір' },
        { id: 13, description: 'безкоштовний додаток' },
    ]

    const complectationArr = [
        { id: 1, description: 'wi-fi камера' },
        { id: 2, description: 'магнітний кронштейн' },
        { id: 3, description: 'жорсткий кабель-кронштейн' },
        { id: 4, description: 'звичайний зарядний кабель' },
        { id: 5, description: 'інструкція' },
    ]

    return (
        <div className={s.content2Main} style={{ width: window.innerWidth }}>
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
            <div className={s.topContent}>
                <div className={s.oldPrice}>
                    <span className={s.old}>Звичайна ціна</span>
                    <span className={s.price}><s>799</s>грн</span>
                </div>
                <div className={s.newPrice}>
                    <span className={s.old}>Акційна ціна</span>
                    <span className={s.price}>399грн</span>
                </div>
            </div>
            <div className={s.buttonOfferAndDescription}>
                <ButtonOffer />
                <div className={s.descriptions}>
                    <ul>
                        {peculiarity.map((el, i) => {
                            return (
                                <div key={i} className={s.listItem}>
                                    <img src={checkedIcon} alt="" />
                                    <li>{el.description.toUpperCase()}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <CameraContent4 />
            <div className={s.topImage} style={{ width: window.innerWidth }}>
                <h2>КОМПЛЕКТ ПОСТАВКИ:</h2>
                <div className={s.descriptions}>
                    <ul>
                        {complectationArr.map((el, i) => {
                            return (
                                <div key={i} className={s.listItem}>
                                    <img src={checkedIcon} alt="" />
                                    <li>{el.description.toUpperCase()}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <img src={complectation} style={{ width: window.innerWidth }} alt="" />
            </div>
            <div className={s.topContent}>
                <div className={s.oldPrice}>
                    <span className={s.old}>Звичайна ціна</span>
                    <span className={s.price}><s>799</s>грн</span>
                </div>
                <div className={s.newPrice}>
                    <span className={s.old}>Акційна ціна</span>
                    <span className={s.price}>399грн</span>
                </div>
            </div>
            <div className={s.bottomIcons} style={{ width: window.innerWidth }}>
                {iconsArrBottom.map((el) => {
                    return (
                        <div className={s.icons}>
                            <img src={el.icon} alt="" />
                            <span>{el.subtitle}</span>
                        </div>
                    )
                })}
            </div>

            <div className={s.bottomContent}>

            </div>
        </div>
    )
}

export default CameraContent2