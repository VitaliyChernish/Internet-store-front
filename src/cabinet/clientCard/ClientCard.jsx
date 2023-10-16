import React, { useEffect, useState } from 'react'
import s from './clientCard.module.scss'
import { updateClientData, deleteClientData, updateOffer, calc, parseData } from '../../utils/functions'
import { Link } from 'react-router-dom'
import { serverApi } from '../../utils/consts'

const ClientCard = ({
    number,
    index,
    offerLink,
    buttonPlace,
    clientName,
    clientPhone,
    clientEmail,
    clientTelegram,
    clientOffer,
    offerConfirmation,
    offerDetails,
    offerComments,
    date,
}) => {
    const [confirm, setConfirm] = useState(offerConfirmation)
    const [email, setEmail] = useState(clientEmail)
    const [telegram, setTelegram] = useState(clientTelegram)
    const [offer, setCount] = useState(clientOffer)
    const [details, setPrice] = useState(offerDetails)
    const [comment, setComment] = useState(offerComments)
    const [showComment, setShowComment] = useState(false)

    //
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [showDeleteAlert, setShowDeleteAlert] = useState(false);
    const [statusAvailable, setStatusAvailable] = useState(offerConfirmation);

    const offerStatusChange = (e) => {
        setStatusAvailable(e.target.value)
        if(e.target.value === 'Завершено'){
            setShowConfirmation(true)
        }
        updateClientData(
            email,
            telegram,
            offer,
            e.target.value,
            details,
            comment,
            index
        )
    }
    // const offerStatusChange = () => {
    //     setShowConfirmation(true);
    // }
    const offerDeleteAlert = () => {
        setShowDeleteAlert(true);
    }
    const deleteDataChoice = (choice) => {
        if (choice === 'confirm') {
            setConfirm(!confirm);
            deleteClientData(
                index
            )
        }
        setShowDeleteAlert(false);
    }

    const updateData = () => {
        updateClientData(
            email,
            telegram,
            offer,
            statusAvailable,
            details,
            comment,
            index
        )
    }
    const handleUserChoice = (choice) => {
        const token = parseData('token')
        const formData = new FormData();
        formData.append('forBought', offerDetails * offer)
        if (choice === 'confirm') {
            setConfirm(!confirm);
            updateOffer({
                link: offerLink,
                success: offer * offerDetails,
                toggle: false,
                forBought: offerDetails * offer
            });
            calc(`${serverApi}:5000/api/offers/updateOffers`, token, formData)
            updateClientData(
                '',
                '',
                '',
                true,
                '',
                index
            )
        }
        setShowConfirmation(false);
    }
    return (
        <div className={s.clientCardMain} key={index}>
            {number + 1}
            {showDeleteAlert && (
                <div className={s.confirmationModal}>
                    <p>Увага! видалення <span style={{ color: 'red' }}>НЕВІДВОРОТНЄ!!!!!!</span> </p>
                    <p>Видалення призведе до <span style={{ color: 'red' }}>ВТРАТИ</span> контакту покупця!!</p>
                    <div className={s.buttonsBlock}>
                        <button data-type="confirm" onClick={() => deleteDataChoice('confirm')}>Підтвердити</button>
                        <button data-type="cancel" onClick={() => deleteDataChoice('cancel')}>Відміна</button>
                    </div>
                </div>
            )}
            {showConfirmation && (
                <div className={s.confirmationModal}>
                    <p>Ця дія<span style={{ color: 'red' }}> НЕВІДВОРОТНЯ!!!</span></p>
                    <p>Після зміни статусу на<span style={{ color: 'red' }}> ЗАВЕРШЕНО</span></p>
                    <p>В базу буде додано профіт. Не натискай якщо товар не забрали!!!</p>
                    <div className={s.buttonsBlock}>
                        <button data-type="confirm" onClick={() => handleUserChoice('confirm')}>Підтвердити</button>
                        <button data-type="cancel" onClick={() => handleUserChoice('cancel')}>Відміна</button>
                    </div>
                </div>
            )}
            <div className={s.clientCardUpper}>
                <div className={s.element}>
                    <div className={s.header}>Посилання:</div>
                    <Link to={offerLink} target="_blank" ><div className={s.value}>{offerLink.slice(21)}</div></Link>
                </div>
                <div className={s.element}>
                    <div className={s.header}>номер кнопки:</div>
                    <div className={s.value}>{buttonPlace}</div>
                </div>
                <div className={s.element} style={{ width: '50%' }}>
                    <div className={s.header}>Показати коментар користувача -<input onChange={() => setShowComment(!showComment)} type="checkBox" /></div>

                    {showComment && <div className={s.value} onInput={(e) => setComment(e.target.textContent)} contentEditable='true' >{offerComments}</div>}
                </div>
            </div>
            <div className={s.clientCard}>
                <div className={s.element}>
                    <div className={s.header}>Ім'я:</div>
                    <div className={s.value}>{clientName}</div>
                </div>
                <div className={s.element}>
                    <div className={s.header}>телефон:</div>
                    <div className={s.value}>{clientPhone}</div>
                </div>
                <div className={s.element}>
                    <div className={s.header}>пошта:</div>
                    <div className={s.value} onInput={(e) => setEmail(e.target.textContent)} contentEditable='true'>{clientEmail}</div>
                </div>
                <div className={s.element}>
                    <div className={s.header}>telegram:</div>
                    <div className={s.value} onInput={(e) => setTelegram(e.target.textContent)} contentEditable='true'>{clientTelegram}</div>
                </div>
                <div className={s.element}>
                    <div style={{ color: 'rgb(170, 52, 53)' }} className={s.header}>скільки замовив*</div>
                    <div className={s.value} onInput={(e) => setCount(e.target.textContent)} contentEditable='true'>{clientOffer}</div>
                </div>
                <div className={s.element}>
                    <div className={s.header}>ціна:</div>
                    <div className={s.value} onInput={(e) => setPrice(e.target.textContent)} contentEditable='true'>{offerDetails}</div>
                </div>
                <div className={s.element}>
                    <div className={s.header}>статус:</div>
                    <select
                        name="userDataForDelivery"
                        value={statusAvailable} // Значення селекту, яке вибране
                        onChange={offerStatusChange} // Обробник зміни значення селекту
                        style={{ fontSize: '1rem' }}
                    >
                        <option value="Клієнт очікує дзвінок"
                            disabled={statusAvailable === 'Відправлено'
                                || statusAvailable === 'Доставлено до відділення'
                                || statusAvailable === 'Завершено'
                                || statusAvailable === 'Готується до відправки'
                                ? 1 : 0}>
                            Клієнт очікує дзвінок</option>
                        <option value="Готується до відправки"
                            disabled={statusAvailable === 'Відправлено'
                                || statusAvailable === 'Доставлено до відділення'
                                || statusAvailable === 'Завершено'
                                ? 1 : 0}>
                            Готується до відправки</option>
                        <option value="Відправлено"
                            disabled={statusAvailable === 'Доставлено до відділення'
                                || statusAvailable === 'Завершено'
                                ? 1 : 0}>
                            Відправлено</option>
                        <option value="Доставлено до відділення"
                            disabled={statusAvailable === 'Завершено' ? 1 : 0}>
                            Доставлено до відділення</option>
                        <option value="Завершено">Завершено</option>
                        <option value="Відмова/повернення">
                            Відмова/повернення</option>
                    </select>
                </div>
                <div className={s.element}>
                    <div className={s.header}>заявка подана:</div>
                    <div className={s.value}>{date}</div>
                </div>
                <div className={s.element}>
                    <div className={s.delete} onClick={offerDeleteAlert}>ВИДАЛИТИ</div>
                    <div className={s.update} onClick={updateData}>ЗБЕРЕГТИ</div>
                </div>
            </div>
        </div>
    )
}

export default ClientCard;