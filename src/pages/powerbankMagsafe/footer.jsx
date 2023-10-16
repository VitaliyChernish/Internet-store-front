import React, { useEffect } from "react";
import s from './cameraContent.module.scss';
import { Link } from "react-router-dom";

const Footer = ({mainpageColor}) => {

    return (
      <div className={s.footerMainContainer} style={{backgroundColor: mainpageColor, width: window.innerWidth >= 599 ? 600 : window.innerWidth}}>
        <div className={s.footerContentContainer}>
            <span>Режим роботи: </span>
            <span>Пн - Нд. 09:00 - 21:00</span>
            <Link to={'/sitepolitics'}>Політика конфіденційності</Link>
        </div>
      </div>
    );
};

export default Footer;
