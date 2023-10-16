import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import s from './cameraContent.module.scss';
import order from './statik/order.png';
import parcel from './statik/parcel.png';
import call from './statik/call.png';
import pay from './statik/pay.png';
import { goalVariant } from "../../store/goalVariants/actionsGoal";

const CameraContent8 = () => {
    const goal = useSelector(state => state.WhatGoalReducer.goal);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(goalVariant('Як замовити міні камеру:'));
    }, [dispatch]);

    const handleGoalChange = (newGoal) => {
        switch (newGoal) {
            case 'Скільки камер Вам потрібно для офісу?':
                return 'office';
            default:
                return 'default';
        }
    };

    const forWhat = handleGoalChange(goal);

    return (
        <>
            <h1>{goal}</h1>
            <div style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} className={s.bestOfferContainer}>
                <div className={s.forWhatPlace}>
                    {forWhat === 'office'
                        ? <span>ДЛЯ ОФІСУ</span>
                        : <>
                            <span>ДЛЯ ВІТАЛЬНІ</span>
                            <span>ДЛЯ ДИТЯЧОЇ</span>
                            <span>ДЛЯ ПІД'ЇЗДУ</span>
                            <span>ДЛЯ АВТО</span>
                        </>
                    }
                </div>
                <div className={s.optPrices}>
                    <span>399грн</span>
                    <span>749грн</span>
                    <span>1099грн</span>
                    <span>1149грн</span>
                </div>
            </div>
        </>
    );
};

export default CameraContent8;
