import React, { useEffect, useState } from "react";
import s from './cameraContent.module.scss';
import MagsafeContent1 from "./MagsafeContent1";
import CameraContent2 from "./MagsafeContent2";
import CameraContent3 from "./cameraContent3";
import CameraContent6 from "./cameraContent6";
import HeaderMain from "./header";
import CameraContent7 from "./cameraContent7";
import { useDispatch } from "react-redux";
import { goalVariant } from "../../store/goalVariants/actionsGoal";
import MagsafeContent9 from "./MagsafeContent9";
import { v4 as uuidv4 } from 'uuid';
import { serverApi, FRONTEND_LINK, MAIN_MAGSAFE } from "../../utils/consts";
import MainButtons from "../../pageElements/mainButtons/MainButons";
import Footer from "./footer";

const MainMagsafe = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const dispatch = useDispatch(null)

    useEffect(() => {
        if (localStorage.getItem('magsafeUniqueTocken')) {
            // console.log(localStorage.getItem('magsafeUniqueTocken'))
        } else {
            const token = uuidv4();
            const formData = new FormData();
            formData.append('ip', token);

           fetch(`${serverApi}:5000/api/visit/addVisits`, {
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
            <HeaderMain />
            <MagsafeContent1 />
            <CameraContent2 page={2} linkOfOffer={`${FRONTEND_LINK}${MAIN_MAGSAFE}`} />
            <CameraContent3 />
            <CameraContent7 page={3} linkOfOffer={`${FRONTEND_LINK}${MAIN_MAGSAFE}`} />
            <MagsafeContent9 page={4} />
            <CameraContent6 page={5} />
            <MainButtons mainpageColor={'rgb(22,22,23)'} />
            <Footer mainpageColor={'rgb(22,22,23)'} />
        </div>
    )
}

export default MainMagsafe;