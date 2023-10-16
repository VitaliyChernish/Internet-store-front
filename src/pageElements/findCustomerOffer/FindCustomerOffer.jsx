import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import s from './findCustomerOffer.module.scss';
import { getOneClientData } from "../../utils/functions";
import CustomerOfferRenderComponent from "./customerOfferRenderComponent";

const FindCustomerOffer = () => {
    const { register, handleSubmit } = useForm();
    const [customerData, setCustomerDataFromServer] = useState([]);
    const [showData, setShowData] = useState(false)

    const getDataFromServer = (data) => {
        getOneClientData(setCustomerDataFromServer, data.clientPhoneGetOneCustomer)
        setTimeout(() => {
            setShowData(true);
        }, 100);
    }

    return (
        <>
            <div className={s.findOfferCustomerMainBox} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }}>
                <form className={s.form} onSubmit={handleSubmit(getDataFromServer)}>
                    {/* <label className={s.label} htmlFor="clientPhoneGetOneCustomer">ВВЕДІТЬ НОМЕР ТЕЛЕФОНУ</label> */}
                    <button type="submit" className={s.createButton}>
                        ВІДСТЕЖИТИ ЗАМОВЛЕННЯ
                    </button>
                    <input
                        type="text"
                        id="clientPhoneGetOneCustomer"
                        {...register('clientPhoneGetOneCustomer')}
                        placeholder=" телефон у форматі: 0931233456"
                        className={s.input}
                    />

                </form>
            </div>
            {showData && (
                <div className={s.customerOfferRenderComponent}>
                    <CustomerOfferRenderComponent clientData={customerData.length >= 1 ? customerData : 'notFound'} />
                </div>
            )}
        </>
    )
}

export default FindCustomerOffer;