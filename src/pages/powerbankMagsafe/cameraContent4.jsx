import React from "react";
import s from './cameraContent.module.scss';
import batterypacksideview from './statik/img100.webp'
import noCable from './statik/noCable.jpg'
import batteryCharging from './statik/batteryCharging.png'
import airpodsCharge from './statik/airpodsCharge.jpg'

const listItemArr = [
    { image: batterypacksideview, styleName: '', marker: '', content: '' },
    { image: noCable, styleName: s.imageSituation1, marker: '', content: `` },
    { image: batteryCharging, styleName: s.imageSituation1, marker: '', content: '' },
    { image: airpodsCharge, styleName: s.imageSituation1, marker: '', content: '' },
]


const CameraContent4 = () => {

    return (
        <div className={s.content4Main} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} >
            <div className={s.listItems} style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} >
                <div className={s.arrMap}>
                    {listItemArr.map((el, i) => {
                        return (
                            <>
                                <div key={i} className={s.listItem}>
                                    <span className={s.marker}>{el.marker.toUpperCase()}</span>
                                    <span className={s.context}>{el.content}</span>
                                    <img style={{ width: window.innerWidth <= 599 ? window.innerWidth : 600 }} src={el.image} alt="" />
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default CameraContent4;