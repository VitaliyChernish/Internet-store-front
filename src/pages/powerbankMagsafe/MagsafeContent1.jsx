import React from "react";
import s from './cameraContent.module.scss';
import image from './statik/img17.webp';

const MagsafeContent1 = () => {

    
    const powBank = 'Бездротовий павербанк'

    return (
        <div className={s.content1Main} style={{ width: window.innerWidth }}>
            <div className={s.content}>
                <span className={s.header}>MagSafe Battery Pack</span>
                <span className={s.powBank}>{powBank.toUpperCase()}</span>
            </div>
            <img src={image} alt="" className={s.content1ImageBackground} style={{ width: window.innerWidth }} />
        </div>
    )
}

export default MagsafeContent1