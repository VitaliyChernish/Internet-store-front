import React from "react";
import s from './cameraContent.module.scss';
import image from './statik/NoImageAvailable.jpg';
import nightvision from './statik/nightvisionBlack.png'
import mooveDetection from './statik/mooveDetectionBlack.png'
import angle from './statik/angle.png';
import microphone from './statik/microphoneBlack.png';

const iconsArrTop = [
    { id: 1, icon: nightvision, subtitle: 'нічна зйомка' },
    { id: 2, icon: mooveDetection, subtitle: 'детектор руху' },
    { id: 3, icon: angle, subtitle: 'кут 150°' },
    { id: 4, icon: microphone, subtitle: 'запис звуку' },
]

const CameraContent1 = () => {

    return (
        <div className={s.content1Main} style={{ width: window.innerWidth }}>
            <div className={s.iconsTop} style={{ width: window.innerWidth }}>
                {iconsArrTop.map((el) => {
                    return (
                        <div className={s.icons}>
                            <img src={el.icon} alt="" />
                            <span>{el.subtitle}</span>
                        </div>
                    )
                })}
            </div>
            <img src={image} alt="" className={s.content1ImageBackground} style={{ width: window.innerWidth }}></img>
            <div className={s.promotionAttentionContainer}>
                <div className={s.promotionAttention}>
                    <span className={s.promotionHeader}>АКЦІЯ</span>
                    <span className={s.promotionPercent}>- 50%</span>
                    <span className={s.promotionDescription}>ЗНИЖКА</span>
                </div>
            </div>
        </div>
    )
}

export default CameraContent1