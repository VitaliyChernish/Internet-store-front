import React from "react";
import s from './ledLights.module.scss';
import image from './statik/ledLight/ledLigntMain.png';

const MagsafeContent1 = () => {

    const powBank = 'Новорічний настрій гарантовано!'

    return (
        <div className={s.content1Main} style={{ width: window.innerWidth }}>
            <div className={s.content}>
                <span className={s.header}>Гірлянда з Дідом Морозом</span>
                <span className={s.powBank}>{powBank.toUpperCase()}</span>
            </div>
            <img src={image} alt="" className={s.content1ImageBackground} style={{ width: window.innerWidth }} />
            <div className={s.promotionAttentionContainer}>
                <div className={s.promotionAttention}>
                    <span className={s.promotionHeader}>АКЦІЯ</span>
                    <span className={s.promotionPercent}>XIT</span>
                    <span className={s.promotionDescription}>2024<span style={{fontSize: '1rem'}}>року</span></span>
                </div>
            </div>
        </div>
    )
}

export default MagsafeContent1