import React, { useState } from "react";
import s from './buttonOffer.module.scss';
import { useDispatch } from "react-redux";
import { makingOffer } from "../../../../store/makingOffer/actionsOffer";

const ButtonOffer = ({buttonPlace, buttontext = 'ЗАМОВИТИ ЗАРАЗ'}) => {
    const [show, setShow] = useState(true)
    const dispatch = useDispatch()

    const itsOffer = () => {
        localStorage.setItem('buttonPlace', buttonPlace);
        dispatch(makingOffer())
        setShow(!show)
    }

    return (
        <>
            {/* <button className={s.buttonContainerMain} onClick={itsOffer}><span className={s.cometSpan}>ЗАМОВИТИ ЗАРАЗ</span></button> */}
            <div onClick={itsOffer} className={s.buttonContainer}>
                <li>{buttontext}</li>
            </div>
        </>
    )
}

export default ButtonOffer;