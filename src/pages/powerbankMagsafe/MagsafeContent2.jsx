import React from "react";
import s from './cameraContent.module.scss';
import ButtonOffer from "./pageElements/buttonOffer/ButtonOffer";
import checkedIcon from './statik/checkedIcon.png'
import CameraContent4 from "./cameraContent4";
import iphonesLine from './statik/iphonesLine.png'
import powerWatt from './statik/powerWatt.png'
import mAh5000 from './statik/mAh5000.png'
import magnetic from './statik/magnetic.png'
import ActionPrices from "./actionsPrices/ActionPrices";

const CameraContent2 = ({page, linkOfOffer}) => {

    let day = 2.5
    const expiryDate = new Date();
    expiryDate.setHours(expiryDate.getHours() + (day * 24));

    const priorityArr = [
        { id: 1, icon: magnetic, description: 'Магнітне кріплення' },
        { id: 2, icon: mAh5000, description: 'Ємність 3000mAh' },
        { id: 3, icon: powerWatt, description: 'Потужність 20W' },
    ]

    const complectationArr = [
        { id: 4, description: 'Заряджає і прилипає без чохла Magsafe:', magnet: '' },
        { id: 5, description: 'iPhone 12 покоління, SE;', magnet: s.magnet },
        { id: 6, description: 'iPhone 13 покоління;', magnet: s.magnet },
        { id: 7, description: 'iPhone 14 покоління;', magnet: s.magnet },
    ]

    const complectationArr1 = [
        { id: 0, description: 'Заряджає, але не прилипає без чохла:', magnet: '' },
        { id: 1, description: 'iPhone 8 покоління, X;', magnet: '' },
        { id: 2, description: 'iPhone XR, XS, XS Max;', magnet: '' },
        { id: 3, description: 'iPhone 11 покоління;', magnet: '' }
    ]

    return (
        <div className={s.content2Main} style={{ width: window.innerWidth }}>
            
            <ActionPrices linkOfOffer={linkOfOffer} backgrount={'white'}/>

            <div className={s.offerButton}>
                <ButtonOffer buttonPlace='1' />
            </div>

            <CameraContent4 page={page} />
            <div className={s.topImage} style={{ width: window.innerWidth }}>
                <h2>Сумісний з iPhone:</h2>
                <div className={s.descriptions}>
                    <ul>
                        {complectationArr.map((el, i) => {
                            return (
                                <div key={i} className={s.listItem}>
                                    {el.id !== 0 && el.id !== 4 ? <img src={checkedIcon} alt="" /> : null}
                                    <li className={el.magnet}>{el.description}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <img src={iphonesLine} style={{ width: window.innerWidth }} alt="" />
                <div className={s.descriptions}>
                    <ul>
                        {complectationArr1.map((el, i) => {
                            return (
                                <div key={i} className={s.listItem}>
                                    {el.id !== 0 && el.id !== 4 ? <img src={checkedIcon} alt="" /> : null}
                                    <li className={el.magnet}>{el.description}</li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <div className={s.priority} style={{ width: window.innerWidth }}>
                {priorityArr.map((el, i) => {
                    return (
                        <div key={i} className={s.priorityArr}>
                            <img src={el.icon} alt="" />
                            <span>{el.description}</span>
                        </div>
                    )
                })}
            </div>

            <div className={s.bottomContent}>

            </div>
        </div>
    )
}

export default CameraContent2