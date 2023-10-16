import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createOffer, parseData, getAllClientData } from "../utils/functions";
import s from './cabinet.module.scss';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../store/isAuth/actionsAuth";
import ClientCard from "./clientCard/ClientCard";
import { serverApi } from "../utils/consts";
import OfferCards from "./offerCard/OfferCards";
import Login from "../loginForm/Login";

const AdminCabinet = () => {
    const { register, handleSubmit } = useForm();
    const [customerData, setCustomerDataFromServer] = useState([]);
    const [offerData, setOfferData] = useState([]);
    const [uniqueUsers, setUniqueUsers] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [toggleOfferShowHide, setToggleOfferShowGide] = useState(true)
    const [toggleCreateNewOffer, setToggleCreateNewOffer] = useState(false)

    useEffect(() => {
        const token = parseData('token')
        fetchOfferData()
        fetch(`${serverApi}:5000/api/visit/getVisits`, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(responce => responce.json())
            .then(data => {
                setUniqueUsers(data.length)
            })
    }, [])

    function fetchOfferData() {
        fetch(`${serverApi}:5000/api/offers/getAllOffers`)
            .then(response => response.json())
            .then(offers => {
                setOfferData(offers);
            })
            .catch(error => console.error(error));
    }

    const onSubmit = (data) => {
        createOffer(
            data.headerOfOffer,
            data.offerLink,
            data.buyingPrice,
            data.oldPrice,
            data.newPrice,
            data.setTimer,
            data.setImage[0],
            data.descrField
        )
    }

    const exitUserCabinet = () => {
        setTimeout(() => {
            navigate('/')
        }, 1000)
        const defaultData = { "token": '', "name": '', "role": '', "avatar": '' };
        localStorage.setItem('data', JSON.stringify(defaultData));
        return dispatch(auth(parseData('role')))
    }

    useEffect(() => {
        getAllClientData(setCustomerDataFromServer)
    }, [])

    if (parseData('role') !== 'ADMIN') {
        return (
            <Login />
        )
    }

    return (
        <>
            <div className={s.formMain} >
                <div className={s.headerAndExit}>
                    <div>Admin Cabinet</div>
                    <div className={s.exitButton} onClick={exitUserCabinet}>EXIT ADMIN CABINET</div>
                </div>
                <div className={s.offerCards}>
                    {offerData.map(el => (
                        <OfferCards
                            key={el.id}
                            index={el.id}
                            name={el.name}
                            link={el.link}
                            oldPrice={el.oldPrice}
                            buyingPrice={el.buyingPrice}
                            newPrice={el.newPrice}
                            setDiscontPersent={el.setDiscontPersent}
                            setDiscontPrice={el.setDiscontPrice}
                            discontSum={el.discontSum}
                            setTimer={el.setTimer}
                            forBought={el.forBought}
                            forPromotions={el.forPromotions}
                            forDeliveryReturned={el.forDeliveryReturned}
                            others={el.others}
                            success={el.success}
                            uniqueUsers={uniqueUsers}
                            lidNumbers={customerData.length}
                            description={el.description}
                        />
                    ))}
                </div>
                <div className={s.showHideOffers}>
                    <label className={s.checkboxContainer}>
                        <span className={s.checkboxLabel}>Приховати виконані офери?</span>
                        <input onChange={() => setToggleOfferShowGide(!toggleOfferShowHide)} type="checkbox" defaultChecked='true' className={s.checkboxInput} />
                    </label>
                    <label className={s.checkboxContainer}>
                        <span className={s.checkboxLabel}>Створити новий офер</span>
                        <input onChange={() => setToggleCreateNewOffer(!toggleCreateNewOffer)} type="checkbox" className={s.checkboxInput} />
                    </label>
                </div>
                {toggleCreateNewOffer
                    ? <>
                        <h1>Створити картку послуги:</h1>
                        <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
                            <div className={s.field}>
                                <label htmlFor="offerLink">Ссилка на продукт:</label>
                                <input
                                    type="text"
                                    id="offerLink"
                                    {...register("offerLink")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="headerOfOffer">Назва продукту:</label>
                                <input
                                    type="text"
                                    id="headerOfOffer"
                                    {...register("headerOfOffer")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="oldPrice">Стара ціна:</label>
                                <input
                                    type="text"
                                    id="oldPrice"
                                    {...register("oldPrice")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="newPrice">Нова ціна:</label>
                                <input
                                    type="text"
                                    id="newPrice"
                                    {...register("newPrice")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="buyingPrice">Закупочна ціна:</label>
                                <input
                                    type="text"
                                    id="buyingPrice"
                                    {...register("buyingPrice")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="setTimer">Таймер</label>
                                <input
                                    type="text"
                                    id="setTimer"
                                    {...register("setTimer")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="setImage">Зображення</label>
                                <input
                                    type="file"
                                    id="setImage"
                                    accept="image/jpeg, image/png"
                                    {...register("setImage")}
                                    className={s.input}
                                />
                            </div>
                            <div className={s.field}>
                                <label htmlFor="descrField">Опис товару</label>
                                <input
                                    type="text"
                                    id="descrField"
                                    {...register("descrField")}
                                    className={s.input}
                                />
                            </div>
                            <button type="submit" className={s.createButton}>
                                Підтвердити створення
                            </button>
                        </form>
                    </>
                    : null
                }
                <div className={s.clientCards}>
                    {customerData.length >= 1 && customerData.map((el, i) => (
                        toggleOfferShowHide &&
                            el.offerConfirmation === 'Завершено' ? null
                            : <ClientCard
                                number={i}
                                index={el.id}
                                offerLink={el.offerLink}
                                buttonPlace={el.buttonPlace}
                                clientName={el.clientName}
                                clientPhone={el.clientPhone}
                                clientEmail={el.clientEmail}
                                clientTelegram={el.clientTelegram}
                                clientOffer={el.clientOffer}
                                offerConfirmation={el.offerConfirmation}
                                offerDetails={el.offerDetails}
                                offerComments={el.offerComments}
                                date={el.date}
                            />
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminCabinet;