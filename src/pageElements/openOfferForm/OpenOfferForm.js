import React, { useState } from "react";
import s from './openForm.module.scss'
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { closeOffer } from "../../store/makingOffer/actionsOffer";
import { createClientData, sendMessageToTelegram, showMessage } from "../../utils/functions";
import { store } from "../../store/index";
import { botToken, chatId } from '../../utils/consts';
import packingWhite from '../../pages/powerbankMagsafe/statik/packingWhite.png'
import call from '../../pages/powerbankMagsafe/statik/call.png'
import accept from '../../pages/powerbankMagsafe/statik/accept.png';

const OpenOfferForm = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const choiceOffer = store.getState().OfferReducer.whatIsOffer
    const priceOffer = store.getState().OfferReducer.whatPrice
    const close = () => {
        dispatch(closeOffer())
    }
    const [selectedOption, setSelectedOption] = useState('nowaPoshta'); // Значення за замовчуванням
    const [sendForm, setSendForm] = useState(false)
    const [offerNumber, setOfferNumber] = useState('')

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value); // Оновлення вибраного значення
    }

    function isValidPhoneNumber(phoneNumber) {
        const phonePattern = /^0\d{9}$|^\+380\d{9}$|^80\d{9}$|^380\d{9}$/;
        return phonePattern.test(phoneNumber);
    }
    const submitForm = (data) => {
        const buttonPlace = localStorage.getItem('buttonPlace')
        const itemPrice = localStorage.getItem('itemPrice')
        const offerLink = window.location.href;
        setOfferNumber(data.customerPhone)
        if (!isValidPhoneNumber(data.customerPhone)) {
            showMessage("Будь ласка, введіть номер у форматі 0xxxxxxxxx", 5000);
            return;
        }
        const messageTelegram = `Хтось оформив замовлення на сайті ${window.location.href} !!! ${data.customerName} 
        хоче замовити ${choiceOffer ? choiceOffer : 'щось, чи просто проконсультуватись'}. 
        Обраний спосіб доставки: ${selectedOption}, місто: ${data.customerCity}, номер відділення: ${data.customerPostNumber}.
        Також покупець уточнює: ${data.customerComment}
        Перевір стек замовлень в адмінці або подзвони: ${data.customerPhone}`

        const message = `${data.customerName}  оформив замовлення на сайті ${window.location.href}. 
        Обраний спосіб доставки: ${selectedOption}, місто: ${data.customerCity}, номер відділення: ${data.customerPostNumber}.
        Покупець уточнює: ${data.customerComment}
        Телефон користувача: ${data.customerPhone}`
        createClientData(data, choiceOffer, priceOffer, offerLink, buttonPlace, itemPrice, message)
        sendMessageToTelegram(botToken, chatId, messageTelegram)
        setTimeout(() => {
            dispatch(closeOffer())
        }, 0)
        return (
            setSendForm(true)
        )
    }
    return (
        <div style={{ width: window.innerWidth < 600 ? window.innerWidth : 600 }} className={s.offerFormMain} onClick={close}>
            {sendForm
                ? <div className={s.thankForOffer}>
                    <img src={accept} alt="" />
                    <h1>Дякуємо за замовлення</h1>
                    <div className={s.infoGraphickItem}>
                        <span style={{fontWeight: '100'}}>
                            Ваше замовлення в обробці, номер Вашого телефону використовується як номер замовлення:
                            <b style={{ color: 'green' }}> {offerNumber}</b>
                        </span>
                    </div>
                </div>
                
                : <div className={s.mainContainer} onClick={(e) => e.stopPropagation()}>
                    <div className={s.header}>Заповніть форму для швидкого замовлення</div>
                    {/* <div className={s.div2}>Я з Вами зв’яжусь і з радістю допоможу!</div> */}
                    <form className={s.loginForm} onSubmit={handleSubmit(submitForm)}>
                        <input
                            type="text"
                            placeholder="Ваші прізвище та ім'я*"
                            id="customerName"
                            {...register("customerName")}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Ваш телефон*"
                            id="customerPhone"
                            {...register("customerPhone")}
                            required
                        />
                        <div className={s.selected}>
                            <span>Спосіб доставки:</span>
                            <select
                                name="userDataForDelivery"
                                value={selectedOption} // Значення селекту, яке вибране
                                onChange={handleSelectChange} // Обробник зміни значення селекту
                            >
                                <option value="nowaPoshta">Нова Пошта</option>
                                <option value="ukrPoshta">Укрпошта</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="Місто*"
                            id="customerCity"
                            {...register("customerCity")}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Номер відділення*"
                            id="customerPostNumber"
                            {...register("customerPostNumber")}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Коментар"
                            id="customerComment"
                            {...register("customerComment")}
                        />
                        {choiceOffer &&
                            <input
                                type="text"
                                id="choiceoffer"
                                value={choiceOffer + ' ' + priceOffer}
                                {...register("choiceoffer")}
                            />
                        }

                        <button type="submit" className={s.createButton}>
                            ЗАМОВИТИ
                        </button>
                    </form>
                </div>
            }
        </div>
    )
}

export default OpenOfferForm;