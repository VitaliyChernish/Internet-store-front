import React, { useEffect, useState } from "react";
import s from './ledLights.module.scss';
import LedLights1 from "./ledLights1";
import LedLights2 from "./ledLights2";
import LedLights3 from "./ledLights3";
import LedLights6 from "./ledLights6";
import HeaderMain from "./header";
import LedLights7 from "./ledLights7";
import { useDispatch } from "react-redux";
import { goalVariant } from "../../store/goalVariants/actionsGoal";
import LedLights9 from "./ledLights9";
import { v4 as uuidv4 } from 'uuid';
import { serverApi, FRONTEND_LINK, MAIN_MAGSAFE } from "../../utils/consts";
import MainButtons from "../../pageElements/mainButtons/MainButons";
import Footer from "./footer";
import logo from './statik/batteryIcon.png';

const MainLedLights = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const dispatch = useDispatch(null)

    useEffect(() => {
        let iconLink = document.querySelector('link[rel="icon"]');
        if (iconLink) {
            iconLink.href = logo;
          }
        document.title = 'Лед гірлянда акумуляторна.'
        if (localStorage.getItem('magsafeUniqueTocken')) {
            // console.log(localStorage.getItem('magsafeUniqueTocken'))
        } else {
            const token = uuidv4();
            const formData = new FormData();
            formData.append('ip', token);

           fetch(`${serverApi}/api/visit/addVisits`, {
                method: 'POST',
                body: formData,
            })
                .then(responce => responce.json())
                .then(data => {
                    localStorage.setItem('magsafeUniqueTocken', data.ip)
                })
        }
    }, [])

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    }, [screenWidth])

    useEffect(() => {
        dispatch(goalVariant('Як замовити міні камеру:'))
    }, [])

    return (
        <div style={{ width: screenWidth }} className={s.mainBlock}>
            {/* <HeaderMain /> */}
            <LedLights1 />
            <LedLights2 page={2} linkOfOffer={`${FRONTEND_LINK}${MAIN_MAGSAFE}`} />
            {/* <LedLights3 /> */}
            <LedLights7 page={3} linkOfOffer={`${FRONTEND_LINK}${MAIN_MAGSAFE}`} />
            <LedLights9 page={4} />
            <LedLights6 page={5} />
            <MainButtons mainpageColor={'rgb(22,22,23)'} />
            <Footer mainpageColor={'rgb(22,22,23)'} />
        </div>
    )
}

export default MainLedLights;