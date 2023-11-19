import React, { useEffect, useState } from "react";
import s from './offerCards.module.scss'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { updateOffer, deleteOffer, parseData, calc } from '../../utils/functions'
import { serverApi } from "../../utils/consts";

const OfferCards = ({
    key,
    index,
    name,
    oldPrice,
    newPrice,
    setDiscontPersent,
    setDiscontPrice,
    discontSum,
    buyingPrice,
    link,
    setTimer,
    forBought,
    forPromotions,
    forDeliveryReturned,
    others,
    success,
    uniqueUsers,
    lidNumbers,
    description
}) => {

    const url = `${serverApi}/api/offers/updateOffers`;
    const [editable, setEditable] = useState(false)
    const { register, handleSubmit } = useForm();

    const [openModalBuying, setOpenModalBuying] = useState(false)
    const [openModalMarketing, setOpenModalMarketing] = useState(false)
    const [openModalReturning, setOpenModalReturning] = useState(false)
    const [openModalOthers, setOpenModalOthers] = useState(false)

    const [openModalBuyingMinus, setOpenModalBuyingMinus] = useState(false)
    const [openModalMarketingMinus, setOpenModalMarketingMinus] = useState(false)
    const [openModalReturningMinus, setOpenModalReturningMinus] = useState(false)
    const [openModalOthersMinus, setOpenModalOthersMinus] = useState(false)

    const [buyingExpenses, setBuyingExpenses] = useState(forBought)
    const [marketingExpenses, setMarketingExpenses] = useState(forPromotions)
    const [returningExpenses, setReturningExpenses] = useState(forDeliveryReturned)
    const [othersExpenses, setOthersExpenses] = useState(others)

    const onSubmit = (data) => {
        updateOffer(
            {link,
            buyingPrice: data.buyingPrice,
            oldPrice: data.oldPrice,
            newPrice: data.newPrice,
            setTimer: data.setTimer,
            index,
            description: data.setDiscription
        }
        )
    }
    const plus = (element) => {
        const formData = new FormData();
        const token = parseData('token')
        const val = document.getElementById(element).value
        switch (element) {
            case 'inputMarketingExpences':
                setMarketingExpenses(marketingExpenses + +val)
                setOpenModalMarketingMinus(false)
                formData.append('link', link);
                formData.append('forPromotions', marketingExpenses + +val);
                calc(url, token, formData)
                break
            case 'inputBuyingExpences':
                setBuyingExpenses(buyingExpenses + +val)
                setOpenModalBuyingMinus(false)
                formData.append('link', link);
                formData.append('forBought', buyingExpenses + +val);
                calc(url, token, formData)
                break
            case 'inputReturningExpences':
                setReturningExpenses(returningExpenses + +val)
                setOpenModalReturningMinus(false)
                formData.append('link', link);
                formData.append('forDeliveryReturned', returningExpenses + +val);
                calc(url, token, formData)
                break
            case 'inputOthersExpences':
                setOthersExpenses(othersExpenses + +val)
                setOpenModalOthersMinus(false)
                formData.append('link', link);
                formData.append('others', othersExpenses + +val);
                calc(url, token, formData)
                break
            default:
                break;
        }
    }

    const minus = (element) => {
        const formData = new FormData();
        const token = parseData('token')
        const val = document.getElementById(element).value
        switch (element) {
            case 'inputMarketingExpencesMinus':
                setMarketingExpenses(marketingExpenses - +val)
                setOpenModalMarketingMinus(false)
                formData.append('link', link);
                formData.append('forPromotions', marketingExpenses - +val);
                calc(url, token, formData)
                break
            case 'inputBuyingExpencesMinus':
                setBuyingExpenses(buyingExpenses - +val)
                setOpenModalBuyingMinus(false)
                formData.append('link', link);
                formData.append('forBought', buyingExpenses - +val);
                calc(url, token, formData)
                break
            case 'inputReturningExpencesMinus':
                setReturningExpenses(returningExpenses - +val)
                setOpenModalReturningMinus(false)
                formData.append('link', link);
                formData.append('forDeliveryReturned', returningExpenses - +val);
                calc(url, token, formData)
                break
            case 'inputOthersExpencesMinus':
                setOthersExpenses(othersExpenses - +val)
                setOpenModalOthersMinus(false)
                formData.append('link', link);
                formData.append('others', othersExpenses - +val);
                calc(url, token, formData)
                break
            default:
                break;
        }
    }
    useEffect(() => {

    }, [marketingExpenses])
    return (
        <div key={index} className={s.offerCardContainer}>
            <h2>{name}</h2><span>id:{index}</span>
            <div className={s.statistics}>
                <div className={s.statValues}>
                    <span>Унікальних відвідувань: </span><span>{uniqueUsers}</span>
                </div>
                <div className={s.statValues}>
                    <span>Кількість лідів: </span>
                    <span>{lidNumbers}</span>
                </div>
                <div className={s.statValues}>
                    <span>Конверсія: </span><span>{lidNumbers / uniqueUsers * 100}</span>
                </div>
                <div className={s.statHeader}>Розходи</div>
                {openModalBuying ? <div className={s.plusContainer}><input placeholder="на закупку" id="inputBuyingExpences" type="text" />
                    <button onClick={() => plus('inputBuyingExpences')}>ПЛЮС</button></div> : null}
                {openModalBuyingMinus ? <div className={s.plusContainer}><input placeholder="на закупку" id="inputBuyingExpencesMinus" type="text" />
                    <button style={{ backgroundColor: 'red' }} onClick={() => minus('inputBuyingExpencesMinus')}>МІНУС</button></div> : null}
                <div className={s.statValues}>
                    <span>На закупку: </span>
                    <div onClick={() => setOpenModalBuying(true)} style={{ marginRight: '2vw' }}>✚</div>
                    <div onClick={() => setOpenModalBuyingMinus(true)}>▬</div>
                    <span>{buyingExpenses}</span>
                </div>
                {openModalMarketing ? <div className={s.plusContainer}><input placeholder="на рекламу" id="inputMarketingExpences" type="text" />
                    <button onClick={() => plus('inputMarketingExpences')}>ПЛЮС</button></div> : null}
                {openModalMarketingMinus ? <div className={s.plusContainer}><input placeholder="на рекламу" id="inputMarketingExpencesMinus" type="text" />
                    <button style={{ backgroundColor: 'red' }} onClick={() => minus('inputMarketingExpencesMinus')}>МІНУС</button></div> : null}
                <div className={s.statValues}>
                    <span>На рекламу: </span>
                    <div onClick={() => setOpenModalMarketing(true)} style={{ marginRight: '2vw' }}>✚</div>
                    <div onClick={() => setOpenModalMarketingMinus(true)}>▬</div>
                    <span>{marketingExpenses}</span>
                </div>
                {openModalReturning ? <div className={s.plusContainer}><input placeholder="повернення" id="inputReturningExpences" type="text" />
                    <button onClick={() => plus('inputReturningExpences')}>ПЛЮС</button></div> : null}
                {openModalReturningMinus ? <div className={s.plusContainer}><input placeholder="повернення" id="inputReturningExpencesMinus" type="text" />
                    <button style={{ backgroundColor: 'red' }} onClick={() => minus('inputReturningExpencesMinus')}>МІНУС</button></div> : null}
                <div className={s.statValues}>
                    <span>Повернення: </span>
                    <div onClick={() => setOpenModalReturning(true)} style={{ marginRight: '2vw' }}>✚</div>
                    <div onClick={() => setOpenModalReturningMinus(true)}>▬</div>
                    <span>{returningExpenses}</span>
                </div>
                {openModalOthers ? <div className={s.plusContainer}><input placeholder="інші витрати" id="inputOthersExpences" type="text" />
                    <button onClick={() => plus('inputOthersExpences')}>ПЛЮС</button></div> : null}
                {openModalOthersMinus ? <div className={s.plusContainer}><input placeholder="інші витрати" id="inputOthersExpencesMinus" type="text" />
                    <button style={{ backgroundColor: 'red' }} onClick={() => minus('inputOthersExpencesMinus')}>МІНУС</button></div> : null}
                <div className={s.statValues}>
                    <span>Інше: </span>
                    <div onClick={() => setOpenModalOthers(true)} style={{ marginRight: '2vw' }}>✚</div>
                    <div onClick={() => setOpenModalOthersMinus(true)}>▬</div>
                    <span>{othersExpenses}</span>
                </div>
                <div className={s.statValues} style={{ backgroundColor: 'red' }}>
                    <span>Всього: </span><span>{success - (forPromotions + forDeliveryReturned + others + forBought)}</span>
                </div>
                <div className={s.statValues} style={{ backgroundColor: 'green' }}>
                    <span>Дохід: </span><span>{success}</span>
                </div>
            </div>
            <button className={s.edit} onClick={() => setEditable(!editable)}>Make editable</button>
            <div className={editable ? s.editable : s.notEditable}>
                <form className={s.loginForm} onSubmit={handleSubmit(onSubmit)}>
                    <div className={s.cardValues}>
                        <span>Лінк: </span><Link to={link} target="_blank">{link ? link.slice([21]) : null}</Link>
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="buyingPrice">Закупочна ціна:</label>
                        <input
                            defaultValue={buyingPrice}
                            type="text"
                            id="buyingPrice"
                            {...register("buyingPrice")}
                            className={s.input}
                        />
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="oldPrice">Стара ціна:</label>
                        <input
                            defaultValue={oldPrice}
                            type="text"
                            id="oldPrice"
                            {...register("oldPrice")}
                            className={s.input}
                        />
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="newPrice">Нова ціна:</label>
                        <input
                            defaultValue={newPrice}
                            type="text"
                            id="newPrice"
                            {...register("newPrice")}
                            className={s.input}
                        />
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="setTimer">Таймер:</label>
                        <input
                            defaultValue={setTimer}
                            type="text"
                            id="setTimer"
                            {...register("setTimer")}
                            className={s.input}
                        />
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="setDiscription">Опис товару:</label>
                        <input
                            defaultValue={description}
                            type="text"
                            id="setDiscription"
                            {...register("setDiscription")}
                            className={s.input}
                        />
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="setDiscontPersent">Відсоток знижки:</label>
                        <span>{setDiscontPersent}</span>
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="setDiscontPrice">Нова ціна зі знижкою:</label>
                        <span>{setDiscontPrice}</span>
                    </div>
                    <div className={s.cardValues}>
                        <label htmlFor="discontSum">Сума знижки:</label>
                        <span>{discontSum}</span>
                    </div>
                    <div className={s.buttons}>
                        <button type="submit" className={s.save}>
                            Save
                        </button>
                        <button onClick={(e) => deleteOffer(e, index)} className={s.delete}>Delete</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OfferCards;