import React, { useEffect } from "react";
import s from './findCustomerOffer.module.scss';

const CustomerOfferRenderComponent = ({ clientData }) => {

    useEffect(() => {
        console.log('clientData: ', clientData);
    }, [clientData])

    return (
        <div>
            {clientData === 'notFound'
                ? <div className={s.notFound}>
                    <span>Не можу знайти замовлення з таким номером</span>
                </div>
                :
                clientData.map((el, i) => {
                    return (
                        <div className={s.orderRendered} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} key={i}>
                            <div className={s.spansContainer}>
                                <div className={s.number}>{i + 1}</div><div className={s.mainInfo}>Замовлення номер {el.clientPhone} {el.offerConfirmation}</div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CustomerOfferRenderComponent;