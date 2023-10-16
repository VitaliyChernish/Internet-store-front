import React from "react";
import s from './cameraContent.module.scss';
import situations from './statik/NoImageAvailable.jpg'
import withBooks from './statik/NoImageAvailable.jpg'
import room from './statik/NoImageAvailable.jpg'
import powerbankAkb from './statik/NoImageAvailable.jpg'

const listItemArr = [
    { image: situations, styleName: '', marker: 'підключайтесь ', content: ' з кількох пристроїв' },
    { image: withBooks, styleName: s.imageSituation1, marker: 'непомітна ', content: ` в інтер'єрі` },
    { image: room, styleName: s.imageSituation1, marker: 'краща якість', content: ' серед однокласників' },
    { image: powerbankAkb, styleName: s.imageSituation1, marker: 'живлення ', content: ' від павербанку' },
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
                                    <span>{el.content.toUpperCase()}</span>
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