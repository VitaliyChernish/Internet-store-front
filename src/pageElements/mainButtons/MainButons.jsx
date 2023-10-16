import React from "react";
import s from './mainbuttons.module.scss'
import { Link } from "react-router-dom";

const MainButtons = ({mainpageColor}) => {
    return(
        <div className={s.mainBlock} style={{width: window.innerWidth >= 599 ? 600 : window.innerWidth}}>
            <Link className={s.mainpageBatton} style={{backgroundColor: mainpageColor}} to={'/'}>
                <span>Головна сторінка</span>
            </Link>
        </div>
    )
}

export default MainButtons;