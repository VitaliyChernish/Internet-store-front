import React, { useEffect, useState } from "react";
import s from './cameraContent.module.scss';
import CameraContent1 from "./cameraContent1";
import CameraContent2 from "./cameraContent2";
import CameraContent3 from "./cameraContent3";
import CameraContent5 from "./cameraContent5";
import CameraContent6 from "./cameraContent6";
import HeaderMain from "./header";
import CameraContent7 from "./cameraContent7";
import CameraContent8 from "./cameraContent8";
import { useDispatch } from "react-redux";
import { goalVariant } from "../../store/goalVariants/actionsGoal";

const MainCamera = () => {
    const[screenWidth, setScreenWidth] = useState(window.innerWidth)
    const dispatch = useDispatch(null)

    useEffect(() => {
        setScreenWidth(window.innerWidth)
    },[screenWidth])
    useEffect(() => {
            dispatch(goalVariant('Як замовити міні камеру:'))
    }, [])

    return (
        <div style={{width: screenWidth}} className={s.mainBlock}>
            <HeaderMain />
            <CameraContent1 />
            <CameraContent2 />
            <CameraContent3 />
            <CameraContent6 />
            <CameraContent8 />
            <CameraContent7 />
            <CameraContent5 />
        </div>
    )
}

export default MainCamera