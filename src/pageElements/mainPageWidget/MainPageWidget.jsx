import React from "react";
import s from './mainPageWidget.module.scss'
import { Link } from "react-router-dom";

const MainPageWidget = () => {
    return (
        <Link to={'/'} className={s.mainpageWidgetMain}>
                <div className={s.semiSquare}></div>
                <div className={s.square}></div>
        </Link>
    )
}

export default MainPageWidget;